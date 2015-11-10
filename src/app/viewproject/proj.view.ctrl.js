class ProjectViewController {
  constructor($stateParams, Firebase, $firebaseObject, $log){
    this.$log = $log;
    this.$stateParams = $stateParams;
    this.initialize = this.init();
    this.ref = new Firebase('https://plussteam.firebaseio.com/projects/');
    this.projectRef = this.ref.child(this.$stateParams.id);
    this.data = $firebaseObject(this.projectRef);
  }

  init(){
    this.$log.debug(this.$stateParams);
  }
}

export default ProjectViewController;
