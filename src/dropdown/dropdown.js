'use strict';

angular.module('angularify.semantic.dropdown', [])
.directive('sudropdown', function() {
  return {
    restrict: 'A',
    scope: {
      title: '@',
      name: '@',
      open: '@',
      bindModel: '=ngModel'
    },
    link: function(scope, element, attrs, DropDownController) {
      scope.change = function(){
        alert('change');
      }
      element.dropdown();
    }
  };
});