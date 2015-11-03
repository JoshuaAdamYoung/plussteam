class CreateController {

  constructor(Firebase, $firebaseAuth, $log){
    'ngInject';
    this.$log = $log;
    this.ref = new Firebase('http://plussteam.firebaseio.com');
    this.siteRef = this.ref.child('site');
    this.blogRef = this.siteRef.child('blog');
    this.msgRef = this.siteRef.child('blog');
    this.userRef = this.ref.child('users');
    this.authObj = $firebaseAuth(this.ref);
  }

  newUser(user){
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

  newBlog(form){
    var now = Date.now();
    this.msgRef.push({
        title: form.title,
        text: form.msg,
        author: form.author,
        likes: 0,
        comments: {},
        postedOn: now
    });
  }

  newMessage(form){
   var now = Date.now();
    this.msgRef.push({
        text: form.msg,
        author: form.author,
        postedOn: now
    });
  }


}

export default CreateController;
