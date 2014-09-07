angular.module("recipeApp-modules.services")
  .factory("postService", function () {
    var posts = [
    {
      title: "Crunch-Topped Mac and Cheese",
      serves:1,
      ingredients: [{

        name: "unsalted butter",
        amount: 2,
        type: "tbsp"
      },
      {
        name: "paprika",
        amount: 1/2,
        type: "tsp"
      },
      {
        name: "turmeric",
        amount: 1/4,
        type: "tsp"
      },
      {
        name: "panko breadcrumbs",
        amount: 1/4,
        type: "cup"
      },
      {
        name: "Kosher salt",
        amount: null,
        type: null
      },
      {
        name: "carrots",
        amount: 2,
        type: null
      },
      {
        name: "elbow macaroni",
        amount: 12,
        type: "oz"
      },
      {
        name: "all-purpose flour",
        amount: 1.5,
        type: "tbsp"
      },
      {
        name: "mustard powder",
        amount: 1,
        type: "tsp"
      },
      {
        name: "evaporated milk",
        amount: 12,
        type: "oz"
      },
      {
        name: "shredded American cheese",
        amount: 1.5,
        type: "cups"
      },
      {
        name: "shredded sharp yellow cheddar cheese",
        amount: 1,
        type: "cups"
      },
      {
        name: "ground black pepper",
        amount: null,
        type: null
      }],
      directions: "Melt 1 tablespoon butter in a medium skillet over medium heat. Add the paprika, turmeric and panko and cook, stirring, until the panko is lightly toasted, about 3 minutes; transfer to a small bowl and set aside for topping. Bring a large pot of salted water to a boil. Add the carrots and cook until tender, 10 minutes; remove with a slotted spoon and transfer to a blender. Add the macaroni to the pot and cook as the label directs. Reserve 1 cup of the cooking water, then drain the pasta. Add half of the reserved cooking water to the blender with the carrots and puree until smooth. Melt the remaining 1 tablespoon butter in a medium saucepan over medium heat; whisk in the flour and mustard powder and cook, whisking, 1 minute. Whisk in the evaporated milk and carrot puree; simmer, whisking, until slightly thickened, about 5 minutes. Stir in the cheeses until melted. Add the pasta and stir to coat, adding the remaining cooking water as needed to loosen the sauce. Season with salt and pepper. Divide among bowls and top with the panko mixture."},
    {
      title: "Tomato-Garlic Bread",
      serves:1,
      ingredients: [{
        name: "baguette",
        amount: 1,
        type: null
      },
      {
        name: "olive oil",
        amount: 3,
        type: "tbsp"
      },
      {
        name: "garlic clove",
        amount: 1,
        type: null
      },
      {
        name: "salt",
        amount: null,
        type: null
      },
      {
        name: "tomato",
        amount: 1,
        type: null
      },
      {
        name: "grated parmesan",
        amount: null,
        type: null
      }],
      directions: "Split a baguette lengthwise and slice into pieces; arrange on a baking sheet. Combine 3 tablespoons olive oil, 1 finely chopped garlic clove and a pinch of salt. Brush on the bread, then top each piece with a slice of tomato and some grated parmesan. Bake at 400 degrees F until lightly toasted, about 8 minutes."
    },
  {
    title: "Peach & Almond Clafoutis",
    serves:1,
    ingredients: [{
      name: "eggs",
      amount: 4,
      type: null
    },
    {
      name: "sugar",
      amount: 1/2,
      type: "cup"
    },
    {
      name: "salt",
      amount: 1/4,
      type: "tsp"
    },
    {
      name: "nutmeg",
      amount: 1/4,
      type: "tsp"
    },
    {
      name: "peaches",
      amount: 4,
      type: null
    },
    {
      name: "almonds",
      amount: 1/2,
      type: "cup"
    }],
    directions: "Preheat the oven to 400° F. Combine the eggs and sugar. Whisk for 2 to 3 minutes until light and fluffy. Add the flour, salt, and nutmeg. Pour in the milk and the melted butter. Mix gently until you get a smooth batter. Butter a cake pan or baking dish and place the peaches all over the base. Pour the batter over the peaches and scatter the top with slivered almonds. Bake for 40 to 45 minutes, until risen and golden brown. Leave to cool before serving."
  }];

    var groceryList = [];


    var getPosts = function () {

        return posts;

    };

    var createPost = function (newPost) {

          posts.push(newPost);

        };

    // return methods
    return {
      getPosts: getPosts,
      groceryList: groceryList,
      createPost: createPost,
    };
  });
