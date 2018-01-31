'use strict';
app.controller('MainCtrl',['dataService' ,function(dataService) {
  var vm = this;
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