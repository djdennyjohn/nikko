'use strict';
var app = angular.module('app', ['ui.router',
                                 'infinite-scroll',
                                 'angular.filter',
                                 'angular-click-outside']);














app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider.state('app', {
        url: "/home",
        templateUrl: "./views/home.html"
    });
}]);

'use strict';
app.directive('backgroundImageDirective', function () {
    return function (scope, element, attrs) {
      if(attrs.backgroundImageDirective == 'posterthatismissing.jpg'){
        element.attr({
            'src': './Slices/placeholder_for_missing_posters.png',
        });
      }
       else {
        element.attr({
            'src': './Slices/' + attrs.backgroundImageDirective,
        });
      }
    };
});
'use strict';
app.filter('cut',[ function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';
            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;
            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }
            return value + (tail || ' …');
        };
    }]);
'use strict';
app.factory('dataService',['$http', function ($http) {
	var dataService = {
	get: function(page) {
      var promise = $http.get('./API/CONTENTLISTINGPAGE-PAGE'+page+'.json',{
      }).then(function (response) {
        return response;
      });
      return promise;
    }
	};
	return dataService;
}]);
'use strict';
app.controller('MainCtrl',['$scope','dataService' ,function($scope,dataService) {
  var vm = this;
  $scope.card = {};
  $scope.card.title = 'test';
  vm.page = 1;
  vm.shots = [];
  vm.loadingMore = false;

  vm.loadMoreShots = function() {
    if(vm.loadingMore) return;
    if(vm.page > vm.totalPages) return;
    vm.loadingMore = true;
    var promise = dataService.get(vm.page);
    promise.then(function(data) {
      var shotsTmp = angular.copy(vm.shots);
      shotsTmp = shotsTmp.concat(data.data.page["content-items"].content);
      vm.shots = shotsTmp;
      vm.loadingMore = false;
      vm.page++;
    }, function() {
      vm.loadingMore = false;
    });
    return promise;
  };

  vm.initializePagingData = function(){
  var promise = dataService.get(vm.page);
  promise.then(function(data){
     vm.totalPages = Math.ceil(data.data.page['total-content-items']/data.data.page['page-size-requested']);
     vm.loadMoreShots();
   });
  };

  vm.initializePagingData();
  
}]);
'use strict';
app.controller('SearchCtrl',['$scope','dataService',function($scope,dataService){

	var vm = this;
  vm.searchIndex = [];
  vm.searchResult = [];
	
  vm.searchMovies = function(){
     vm.searchResult = [];
     if(vm.searchText.length === 0)
      return vm.searchResult;
    for(var i=0;i<vm.searchIndex.length;i++){
      if(vm.searchIndex[i].name.toLowerCase().indexOf(vm.searchText.toLowerCase()) !== -1){
        vm.searchResult.push(vm.searchIndex[i]);
      }
    }
  };

  vm.buildSearchIndex = function(){
     for(var i=1;i <=3;i++){
       var promise = dataService.get(i);
       promise.then(function(data) {
       var searchIndexTmp = angular.copy(vm.searchIndex);
       searchIndexTmp = searchIndexTmp.concat(data.data.page["content-items"].content);
       vm.searchIndex = searchIndexTmp;
       });
      }
  };
  vm.buildSearchIndex();

  vm.closeThis = function(){
    vm.searchResult = [];
    vm.searchText = "";
  };

 
}]);

