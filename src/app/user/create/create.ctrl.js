class CreateUserController {

  constructor(Firebase, $firebaseAuth, $log){
    'ngInject';
    this.$log = $log;
    this.ref = new Firebase('http://plussteam.firebaseio.com');
    this.authObj = $firebaseAuth(this.ref);
    this.userRef = this.ref.child('users');
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
      // $state.go('home', [{uid: authData.uid}]);
    })
    .then(function(authData){
      that.$log.debug("Authentication successful for: " + authData.uid);
    })
    .catch(function(error){
      that.$log.debug("Auth error: " + error);
    });
  }

}

export default CreateUserController;
