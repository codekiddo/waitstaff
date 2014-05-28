angular.module('myApp', [])
  .controller('MainCtrl', function($scope) {
    $scope.computeSubtotal = function(price, tax) {
      if (price && tax) { 
        return price + (price / 100 * tax);
      } else {
        return "";
      }
    };
    $scope.computeTip = function(price, tip) {
      if (price && tip) {
        return (price / 100 * tip);
      } else {
        return "";
      }
    };

    $scope.computeTotal = function(price, tax, tip) {
      if (price && tax && tip) {
        return $scope.computeSubtotal(price, tax) + $scope.computeTip(price, tip);
      } else {
        return "";
      }  
    }
  });