app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider.state('app', {
        url: "/home",
        templateUrl: "./views/home.html"
    });
}]);
