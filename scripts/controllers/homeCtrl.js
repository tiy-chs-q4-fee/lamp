angular.module("recipeApp-modules.controllers")
  .controller("homeCtrl", function($scope, postService){

    $scope posts = postService.getPosts;

  });
