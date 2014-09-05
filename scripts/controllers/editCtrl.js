angular.module("recipeApp-modules.controllers");
  controller.("editController", function ($scope, $location, postsService) {
    $scope.posts = postsService.getPosts(post);
  });
