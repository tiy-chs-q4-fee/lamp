angular.module("recipeApp-modules.controllers")

  .controller("groceryController", function ($scope) {
    $scope.items = [
    {text:'oranges', done:false},
    {text: 'zuchini', done:false}
  ];

  $scope.getTotalitems = function () {
    return $scope.items.length;
  };


  $scope.additem = function () {
    $scope.items.push({text:$scope.formitemText, done:false});
    $scope.formitemText = '';
  };

    $scope.clearCompleted = function () {
        $scope.items = _.filter($scope.items, function(item){
            return !item.done;
        });
    };
}
