angular.module('assessment').service('shopService', function($http) {

  this.getProducts = function() {
    return $http( {
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products'
    });
  };

  this.getProductByID = function(id) {
    return $http( {
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products/' + id
    })
  }

})
