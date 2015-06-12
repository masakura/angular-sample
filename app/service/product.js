(function () {
  'use strict';

  /**
   *
   * @class ProductService
   * @constructor
   */
  function ProductService($resource) {
    return $resource('/api/product');
  }

  angular.module('cartsample.service.product',[])
    .factory('ProductService', ProductService);

  ProductService.$inject = ['$resource'];
})();
