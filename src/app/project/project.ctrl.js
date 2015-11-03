class ProjectController {
  constructor (Firebase, MockProjects, UserService, $firebaseArray) {
    'ngInject';
    this.ref = new Firebase('https://plussteam.firebaseio.com');
    this.projectRef = this.ref.child('projects');
    this.projects = $firebaseArray(this.projectRef);
    this.user = UserService;
  }

  newProject(form){
    var now = Date.now();
    let types = [];
    if(form.type.sci){types.push('Science');}
    if(form.type.tech){types.push('Technology');}
    if(form.type.engi){types.push('Engineering');}
    if(form.type.art){types.push('Art');}
    if(form.type.math){types.push('Mathematics');}
    if(form.type.other){types.push('Other');}
    this.projectRef.push({
      title: form.title,
      description: form.desc,
      image: form.img,
      author: 'Anon',
      votesUp: 0,
      votesDown: 0,
      types: types,
      comments: {},
      postedOn: now
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

  openBlogForm(){
    this.blogFormOpen = !this.blogFormOpen;
  }

  openMsgForm(){
    this.msgFormOpen = !this.msgFormOpen;
  }

}

export default ProjectController;
