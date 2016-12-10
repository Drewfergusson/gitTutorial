import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ngMaterial from 'angular-material';
import 'style!css!angular-material/angular-material.css';

import mainModuleConfig from './app.module.config';

import mainPageModule from './src/mainPage/mainPageModule';

angular.module('roster-landing', [
  uiRouter,
  ngMaterial
])
.config();