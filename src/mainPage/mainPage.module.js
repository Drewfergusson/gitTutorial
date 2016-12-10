import angular from 'angular';
import mainPageDirective from './mainPage.directive';

let mainPageModule = angular.module('mainPageModule', [])
                            .directive('mainPage', mainPageDirective);

export default mainPageModule.name;

