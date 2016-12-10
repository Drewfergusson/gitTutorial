defaultModuleConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];
function defaultModuleConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      template: `<main-page></main-page>`
    });
}

export default defaultModuleConfig;