'use strict';
app.controller('SearchCtrl',['dataService',function(dataService){

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

