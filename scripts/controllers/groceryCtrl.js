angular.module("recipeApp-modules.controllers")

  .controller("groceryController", function ($scope, postService, _) {

    $scope.posts = postService.getPosts();
    $scope.groceryList = postService.groceryList;


    $scope.getTotalitems = function () {
      return $scope.items.length;
    };


    $scope.additem = function () {
      $scope.finalIngreds.push($scope.formitemText);
      $scope.formitemText = '';
    };

      $scope.clearCompleted = function () {
          $scope.items = _.filter($scope.items, function(item){
              return !item.done;
          });
      };
  });
