angular.module("recipeApp-modules.controllers")
  .controller("homeCtrl", function($scope, postService, _){


    $scope.posts = postService.getPosts();
    $scope.groceryList = postService.groceryList;
    $scope.disabled = false;

    console.log($scope.posts);

    $scope.deleteRecipe = function(post){

      $scope.posts.splice(post, 1);

    };

    $scope.addToGrocery = function(index) {

      for (var i = 0; i < $scope.posts[index].ingredients.length; i++) {

        $scope.groceryList.push($scope.posts[index].ingredients[i]);

      };

      this.disabled = true;

    };


      $scope.changeClass = function () {
          this.class = "disabled";
      }


  });
