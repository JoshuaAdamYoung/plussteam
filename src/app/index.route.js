function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'app/blog/blog.html',
      controller: 'BlogController',
      controllerAs: 'blog'
    })
    .state('project', {
      url: '/project',
      templateUrl: 'app/project/project.html',
      controller: 'ProjectController',
      controllerAs: 'project'
    })
    .state('messages', {
      url: '/messages',
      templateUrl: 'app/messages/msg.html',
      controller: 'MessageController',
      controllerAs: 'msg'
    })
    .state('test', {
      url: '/test',
      templateUrl: 'app/create/test.html',
      controller: 'TestController',
      controllerAs: 'test'
    })
    .state('login', {
      url:'/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .state('createUser', {
      url:'/user/create',
      templateUrl: 'app/user/create/create.html',
      controller: 'CreateUserController',
      controllerAs: 'create'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
