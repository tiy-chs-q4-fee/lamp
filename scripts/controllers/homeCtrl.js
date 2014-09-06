angular.module("recipeApp-modules.controllers")
  .controller("homeCtrl", function($scope, postService, _){


    $scope.posts = postService.getPosts();
    $scope.groceryList = postService.groceryList;

    $scope.deleteRecipe = function(post){

      $scope.posts.splice(post, 1);

    };

    $scope.addToGrocery = function(index) {

      var ingredients = _.pluck($scope.posts[index].ingredients, "name" );

      for (var i = 0; i < ingredients.length; i++) {

        $scope.groceryList.push(ingredients[i]);

      };

    };


  });
