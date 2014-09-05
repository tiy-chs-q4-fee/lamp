angular.module("recipeApp-modules.services")
  .factory("postService", function () {
    var posts = [
    {
      title: "Peanut Butter & Jelly Sandwich"
      ingredients: {
        name: "bread slices",
        amount: 2,
        type:
      }
      {
        name: "peanut butter",
        amount: 2,
        type: "tablespoons"
      }
      {
        name: "jelly",
        amount: 1,
        type: "tablespoons"
      }
      directions: "Spread peanut butter on one slice of bread and jelly on the other then put the slices together, ingredients facing each other."
    }
    {
      title: "Cheese Quesadilla"
      ingredients: {
        name: "flour tortilla",
        amount: 2,
        type:
      }
      {
        name: "shredded Mexican blend cheese",
        amount: 1/2,
        type: "cup"
        }
      directions: "Sprinkle cheese on one tortilla. Add second tortilla on top. Heat a greased pan to medium temperature, then add the tortillas. Let heat until cheese begins to melt, then flip several times until fully melted. The tortillas should be lightly browned. Remove from pan, cut, and serve."  
    }
    ];
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
