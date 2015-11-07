class UserSettingsController {
  constructor(UserService, $firebaseObject, $firebaseArray){
    this.svc = UserService;
    this.data = UserService.getData();
    this.formObj = {};
    this.userRef = UserService.userRef;
    this.users = $firebaseArray(UserService.usersRef);
  }

  saveSettings(form){
    let that = this;
    that.formObj = {
      firstName:form.firstName,
      lastName:form.lastName,
      major:form.major,
      phone:form.phone,
      altEmail:form.altEmail,
      image:form.profilePic
    };
    that.userRef.set(that.formObj);
    that.formObj = {};
  }

}

export default UserSettingsController;
