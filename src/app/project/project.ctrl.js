class ProjectController {
  constructor (Firebase, MockProjects) {
    'ngInject';
    this.ref = new Firebase('https://plussteam.firebaseio.com/projects');
    this.projects = MockProjects.getData();
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
