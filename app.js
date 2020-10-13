(function(){
  "use strict";
  angular.module("myapp" , [])
  .controller("maincontroller" , doit);
  function doit($scope){
    $scope.string;
    $scope.update_val = function (){
        $scope.myarray = $scope.string.split(",");
        $scope.result_ar = []
        $scope.result = "Please enter data first";
        for (var a in $scope.myarray) {
          $scope.myarray[a] = $scope.myarray[a].trim()
          if($scope.myarray[a] != ""){
            $scope.result_ar.push($scope.myarray[a])
            //$scope.result.push(a.trim())
          }
        }
        //$scope.result = $scope.result_ar.toString();
        if($scope.result_ar.length == 0){
          $scope.result = "Please enter data first";
        }
        else if($scope.result_ar.length <= 3){
          $scope.result = "Enjoy!";
        }
        else if($scope.result_ar.length > 3){
          $scope.result = "Too much!";
        }
    }
  }
})();
