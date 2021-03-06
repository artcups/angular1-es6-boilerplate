
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

//Features
import home from './features/home';
const MODULE_NAME = 'app';
angular.module(MODULE_NAME, [uirouter, home])
  .config(routing);

 export default MODULE_NAME;