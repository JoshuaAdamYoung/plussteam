/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

// import runBlock from './index.run';
import HomeController from './home/home.ctrl';
import BlogController from './blog/blog.ctrl';
import ProjectController from './project/project.ctrl';
import PlaygroundController from './playground/playground.ctrl';
import CreateController from './create/create.ctrl';
import MessageController from './messages/msg.ctrl';
import LoginController from './login/login.ctrl';
import SidebarController from '../app/components/sidebar/sidebar.ctrl';
import UserService from '../app/components/user.svc.js';
import ConfigService from '../app/components/main.config';
import MockProjects from '../app/components/mock.projects';

angular.module('maker', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'foundation', 'firebase', 'flow'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .service('mainConfig', ConfigService)
  .service('UserService', UserService)
  .service('MockProjects', MockProjects)
  .controller('BlogController', BlogController)
  .controller('ProjectController', ProjectController)
  .controller('PlaygroundController', PlaygroundController)
  .controller('CreateController', CreateController)
  .controller('SidebarController', SidebarController)
  .controller('MessageController', MessageController)
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController);
