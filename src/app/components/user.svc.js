class UserService {
  constructor(Firebase, $firebaseAuth, $log, $firebaseObject){
    this.loggedIn = false;
    this.$log = $log;
    this.$firebaseObject = $firebaseObject;
    this.ref = new Firebase('http://plussteam.firebaseio.com');
    this.authObj = $firebaseAuth(this.ref);
    this.usersRef = this.ref.child('users');
    this.uObj = {};
    this.userRef = {};
    this.userData = {};
  }

  login(user){
    let that = this;
    this.authObj.$authWithPassword({
      email: user.pccLogin,
      password : user.password
    })
    .then(function(authData){
      if(authData){
        that.loggedIn = true;
        that.userRef = that.usersRef.child(authData.uid);
        that.userData = that.$firebaseObject(that.userRef);
        that.$log.debug(that.userData);
        if(that.userData.email === null){
          that.userRef.set({email:authData.password.email});
          that.$log.debug('email added to database')
        }
        that.$log.debug('Logged in as: ' + authData.password.email);
      } else {
        that.$state.go('home');
      }
      that.$log.debug(authData);
    })
    .catch(function(error){
      that.$log.debug("Auth error: " + error);
    });
  }


  create(user){
    let that = this;
    const pccMail = user.pccLogin + '@pcc.edu';
    that.uObj = {
      email:pccMail,
      firstName:user.firstName,
      lastName:user.lastName,
      major:user.major
    };
    that.$log.debug(user.pccLogin + ': formatted to: ' + pccMail);

    this.authObj.$createUser({
      email: pccMail,
      password: 'preScramble'
    })
    .then(function(userData){
      that.$log.debug("User: " + userData.uid + " created successfully. Check your email for your password.");
      that.userRef = that.usersRef.child(userData.uid);
      that.userRef.set(that.uObj);
      that.uObj = {};
      that.alert('Account created succesfully, check your PCC email for your password!');

      return that.authObj.$resetPassword({
        email: pccMail
      });
    })
    .catch(function(error){
      that.$log.debug("Auth error: " + error);
    });
  }

  getData(){
    return this.userData;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logout(){
    this.loggedIn = false;
    this.userData = {};
    this.authObj.$unauth();
  }
}

export default UserService;
