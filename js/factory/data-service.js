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