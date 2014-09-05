angular.module("recipeApp-modules", ["recipeApp-modules.controllers", "recipeApp-modules.services", "ngRoute" ])
  .config(function($routeProvider){
    $routeProvider
    .when("/",
    {
      templateUrl: "views/home.html",
      controller: "CONTROLLERNAME"
    })
    .when("/addRecipe",
    {
      templateUrl:"views/recipeForm.html",
      controller:"addController"
    })
    .when("/groceryList",
    {
      templateUrl:"views/groceryList.html",
      controller: "CONTROLLERNAME"
    })
    .otherwise({
      redirectTo: "/notFound"
    });
  });
  angular.module("recipeApp-modules.controllers", []);
  angular.module("recipeApp-modules.services", []);



//font-family: 'Special Elite', cursive;
