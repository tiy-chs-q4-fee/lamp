angular.module("recipeApp-modules.controllers")
  .controller("homeCtrl", function($scope, postService){


    $scope.posts = postService.getPosts();

    $scope.deleteRecipe = function(post){
      $scope.posts.splice($scope.posts.indexOf(post), 1);
      console.log("deleting");
    }

    // $scope.addToGList = function(post){
    //   $scope.items.push($scope.posts.indexOf(post));
    //   console.log("adding to list");
    // }


  });
