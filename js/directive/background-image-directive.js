'use strict';
app.directive('backgroundImageDirective',[ function () {
    return function (scope, element, attrs) {
      if(attrs.backgroundImageDirective === 'posterthatismissing.jpg'){
        element.attr({
            'src': './Slices/placeholder_for_missing_posters.png',
            'class' : 'missing-poster',
        });
      }
       else {
        element.attr({
            'src': './Slices/' + attrs.backgroundImageDirective,
        });
      }
    };
}]);