(function(){
  "use strict";
  angular.module("myapp" , [])
  .controller("maincontroller" , doit);
  var tobuy = [
    {
      name: "cookies", quantity: 10
    },
    {
      name: "oreos", quantity: 8
    },
    {
      name: "marshmello", quantity: 5
    },
    {
      name: "icecreames", quantity: 3
    },
    {
      name: "milkbottles", quantity: 12
    }
  ];
  function doit ($scope){
    $scope.to_buy_array = tobuy;
    $scope.bought_items = [];
    console.log($scope.to_buy_array);
    $scope.buyitem = function (index){
      $scope.bought_items.push($scope.to_buy_array[index]);
      $scope.to_buy_array.splice(index, 1);
      cosole.log($scope.bought_items);

    };
  }
})();
