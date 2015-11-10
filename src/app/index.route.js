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
    .state('logo', {
      url: '/logo',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/logo/logo.html',
          controller: 'LogoController',
          controllerAs: 'logo'
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
    .state('settings', {
      url: '/user/settings',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/user/user.html',
          controller: 'UserSettingsController',
          controllerAs: 'user'
        }
      }
    })
    .state('members', {
      url: '/members',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/members/members.html',
          controller: 'MembersController',
          controllerAs: 'vm'
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
    })
    .state('project.detail', {
      url:'/project/:id',
      views: {
        'sideFrame': {
          templateUrl: 'app/components/sidebar/sidebar.html',
          controller: 'SidebarController',
          controllerAs: 'sidebar'
        },
        'mainFrame': {
          templateUrl: 'app/viewproject/proj.view.html',
          controller: 'ProjectViewController',
          controllerAs: 'project'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
