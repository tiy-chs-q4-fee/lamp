angular.module("recipeApp-modules.services")
  .factory("postService", function () {
    var posts = [];
    var getPosts = function () {
        return posts;
    };

    var createPost = function (newPost) {
      posts.push(newPost);
    };

    var deletePost = function (idx) {
      posts.splice(idx, 1);
    };

    // return methods
    return {
      getPosts: getPosts,
      createPost: createPost,
      deletePost: deletePost
    };
  });
