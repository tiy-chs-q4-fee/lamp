angular.module("recipeApp-modules.controllers")

  .controller("addController", function($scope, $location,postService){

    $scope.getPosts = postService.getPosts();

    $scope.recipeSubmit = function (recipe) {

        postService.createPost(recipe);

        // $location.path("/");

      };
  });
