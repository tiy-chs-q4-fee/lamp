angular.module("recipeApp-modules", ["recipeApp-modules.controllers", "recipeApp-modules.services", "ngAnimate", "ngRoute", "ui.bootstrap", "underscore" ])
  .config(function($routeProvider){
    $routeProvider
    .when("/",
    {
      templateUrl: "views/home.html",
      controller: "homeCtrl"
    })
    .when("/addRecipe",
    {
      templateUrl:"views/recipeForm.html",
      controller:"addController"
    })
    .when("/groceryList",
    {
      templateUrl:"views/groceryList.html",
      controller: "groceryController"
    })
    .when("/editRecipe",
    {
      templateUrl: "views/recipeEdit.html",
      controller: "editController"
    })
    .when("/notFound",
    {
      templateUrl: "views/home.html",
    })
    .otherwise({
      redirectTo:"/notFound",
    })

  });
  angular.module("recipeApp-modules.controllers", []);
  angular.module("recipeApp-modules.services", []);



//font-family: 'Special Elite', cursive;
