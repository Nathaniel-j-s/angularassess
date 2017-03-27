angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopService) {

  $scope.product;

  $scope.getProductByID = shopService.getProductByID($stateParams.id).then(function(response) {
    $scope.product = response.data;
  });

})
