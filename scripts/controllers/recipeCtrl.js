angular.module("recipeApp-modules.controllers")

  .controller("addController", function($scope, $location,postService){

    $scope.getPosts = postService.getPosts();

    $scope.newPost = function (post) {

        postsService.createPost(post);

        $location.path("/");

      };
  });
