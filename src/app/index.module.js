/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import HomeController from './home/home.ctrl';
import BlogController from './blog/blog.ctrl';
import ProjectController from './project/project.ctrl';
import MessageController from './messages/msg.ctrl';
import TestController from './create/test.ctrl';
import LoginController from './login/login.ctrl';
import CreateUserController from './user/create/create.ctrl';
import ConfigService from '../app/components/main.config';
import MockProjects from '../app/components/mock.projects';

angular.module('maker', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'mm.foundation', 'firebase', 'angularFileUpload'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .service('mainConfig', ConfigService)
  .service('MockProjects', MockProjects)
  .controller('BlogController', BlogController)
  .controller('ProjectController', ProjectController)
  .controller('MessageController', MessageController)
  .controller('TestController', TestController)
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController)
  .controller('CreateUserController', CreateUserController);
