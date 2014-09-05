angular.module("recipeApp-modules.controllers")

  .controller("groceryController", function ($scope, postService, _) {
    $scope.items = [
    {text:'oranges', done:false},
    {text: 'zuchini', done:false}
  ];
    $scope.posts = postService.getPosts();
      console.log($scope.posts);
      var ingredients = _.pluck($scope.posts, "ingredients" );
      var ingrObjs = _.flatten(ingredients, []);
      var finalIngreds = _.pluck(ingrObjs, "name");
      $scope.finalIngreds = finalIngreds;
      console.log(finalIngreds);


    $scope.getTotalitems = function () {
      return $scope.items.length;
    };


    $scope.additem = function () {
      $scope.finalIngreds.push($scope.formitemText);
      $scope.formitemText = '';
    };

      $scope.clearCompleted = function () {
          $scope.items = _.filter($scope.items, function(item){
              return !item.done;
          });
      };
  });
