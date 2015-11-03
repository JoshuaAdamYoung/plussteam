class LoginController {

  constructor(Firebase, $firebaseAuth, $log, $state){
    'ngInject';
    this.$log = $log;
    this.$state = $state;
    this.ref = new Firebase('http://plussteam.firebaseio.com');
    this.authObj = $firebaseAuth(this.ref);
    this.userRef = this.ref.child('users');
  }

  login(user){
    let that = this;
    this.authObj.$authWithPassword({
      email: user.email,
      password : user.password
    })
    .then(function(authData, user){
      let uid = authData.uid.toString();
      if(!that.userRef.child(uid)){
        that.userRef.child(uid).set({email: user.email});
        that.$state.go('home', [{uid: authData.uid}]);
      } else {
        that.$state.go('home', [{uid: authData.uid}]);
      }
      that.$log.debug(authData);
    })
    .catch(function(error){
      that.$log.debug("Auth error: " + error);
    });
  }

  create(user){
    let that = this;
    const pccMail = user.email + '@pcc.edu';
    that.$log.debug(user.email + ': formatted to: ' + pccMail);
    this.authObj.$createUser({
      email: pccMail,
      password: 'preScramble'
    })
    .then(function(userData){
      that.$log.debug("User: " + userData.uid + " created successfully. Check your email for your password.");
      return that.authObj.$resetPassword({
        email: pccMail
      });
    })
    .catch(function(error){
      that.$log.debug("Auth error: " + error);
    });
  }


  fbLogin(){
    let that = this;
    this.authObj.$authWithOAuthRedirect("facebook")
    .then(function(authData){
      that.$log.debug("Logged in with Facebook as: " + authData.uid);
      // $state.go('home', [{uid: authData.uid}]);
    })
    .catch(function(error){
      that.$log.debug("Auth error: " + error);
    });
  }

}

export default LoginController;
