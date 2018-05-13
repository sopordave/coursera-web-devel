(function () {
'use-strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope) {
  $scope.csvInput = "";
  $scope.message = "";

  $scope.check = function()
  {
    if ( $scope.csvInput == "" ) {
      $scope.message = "Please enter data first";
    }
    else if ( $scope.csvInput.split(',').length <= 3 ) {
      $scope.message = "Enjoy!";
    }
    else {
      $scope.message = "Too much!";
    }
  };
}


})();
