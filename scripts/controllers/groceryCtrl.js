angular.module("recipeApp-modules.controllers")

  .controller("groceryController", function ($scope, postService, _) {

    $scope.posts = postService.getPosts();
    $scope.groceryList = postService.groceryList;


    $scope.getTotalitems = function () {
      return $scope.items.length;
    };


    $scope.additem = function (item) {
      $scope.groceryList.push({

        name:item.name,
        amount:item.amount,
        type:null

      });

      $scope.groceryItem = {};
    };

    $scope.deleteGrocery = function(index) {
      $scope.groceryList.splice(index, 1);
    };

  });
