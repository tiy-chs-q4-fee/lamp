angular.module("recipeApp-modules.controllers")
  .controller("editController", function ($scope, $location,postService) {
    $scope.posts = postService.getPosts();
  });
