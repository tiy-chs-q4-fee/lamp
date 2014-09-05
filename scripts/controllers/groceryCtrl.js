angular.module("recipeApp-modules.controllers")

  .controller("groceryController", function ($scope) {
    $scope.items = [
      {amount: "1", title: "grapefruit"},
      {amount: "3", title: "juice"},
      {amount: "1", title: "pig foot"},
      {amount: "2", title: "mustard"},
    ];
  });
