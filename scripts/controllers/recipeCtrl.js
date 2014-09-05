angular.module("recipeApp-modules.controllers")
  .controller("addController", function($scope, $location, postService){
    $scope.getPost = postService.getPost(post);
    $scope.newPost = function (post) {
        postsService.createPost(post);

        // $location.path("/");
      };
  });
