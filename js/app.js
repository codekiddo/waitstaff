angular.module('myApp', [])
  .controller('MainCtrl', function($scope) {

    var defaultForm = {
      price: "",
      taxRate: "",
      tipPercentage: ""
    }

    $scope.computeSubtotal = function(price, tax) {
      if (price && tax) { 
        $scope.price = price + (price / 100 * tax);
        return $scope.price;
      } else {
        return "";
      }
    };
    $scope.computeTip = function(price, tip) {
      if (price && tip) {
        $scope.tip = (price / 100 * tip);
        return $scope.tip;
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

    $scope.submit = function() {

      if ($scope.tiptotal) {
        $scope.tiptotal = $scope.tiptotal + $scope.tip;
      } else {
        $scope.tiptotal = $scope.tip;
      }

      if ($scope.mealcount) {
        $scope.mealcount = $scope.mealcount + 1;
      } else {
        $scope.mealcount = 1;
      }

      $scope.tipAverage = function() {
       return ($scope.tiptotal / $scope.mealcount);
      }


    }

    $scope.reset = function() {
      $scope.tiptotal = "";
      $scope.mealcount = "";
      $scope.tip = 0;
      $scope.price = 0;
      $scope.resetInput();
    }

    $scope.resetInput = function() {
      $scope.details = defaultForm;
    }
  });