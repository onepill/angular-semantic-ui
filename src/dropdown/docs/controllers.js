
angular
  .module('dropdownApp', ['angularify.semantic.dropdown'])
  .controller('RootCtrl', RootCtrl);

function RootCtrl ($scope) {
    $scope.dropdown_model = '';

    $scope.dropdown_repeat_model = 'item1';
    $scope.dropdown_items = [
      'item1',
      'item2',
      'item3',
      'item4'
    ];

    $scope.dropdown_key_value_model = '';
    $scope.dropdown_key_value_items = [
      {'id': 'item1', name: "Cool item 1"},
      {'id': 'item2', name: "Cool item 2"},
      {'id': 'item3', name: "Cool item 3"},
      {'id': 'item4', name: "Cool item 4"},
    ];

    $scope.clicked = function(){
      console.log($scope.dropdown_model);
    }

}

