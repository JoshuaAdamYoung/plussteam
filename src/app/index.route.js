function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/project/project.html',
          controller: 'ProjectController',
          controllerAs: 'project'
        }
      }
    })
    .state('blog', {
      url: '/blog',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/blog/blog.html',
          controller: 'BlogController',
          controllerAs: 'blog'
        }
      }
    })
    .state('playground', {
      url: '/playground',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/playground/playground.html',
          controller: 'PlaygroundController',
          controllerAs: 'playground'
        }
      }
    })
    .state('newuser', {
      url: '/create/user',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/create/user/user.html',
          controller: 'CreateController',
          controllerAs: 'create'
        }
      }
    })
    .state('createproject', {
      url: '/create/project',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/create/project/project.html',
          controller: 'CreateController',
          controllerAs: 'create'
        }
      }
    })
    .state('messages', {
      url: '/messages',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/messages/msg.html',
          controller: 'MessageController',
          controllerAs: 'msg'
        }
      }
    })
    .state('test', {
      url: '/create/test',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/create/test/test.html',
          controller: 'CreateController',
          controllerAs: 'create'
        }
      }
    })
    .state('login', {
      url:'/login',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
