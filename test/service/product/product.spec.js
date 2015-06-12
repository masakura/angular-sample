(function () {
  'use strict';

  describe('Service: ProductService', function () {

    var ProductService, $rootScope;

    beforeEach(module('cartsample.service.product'));

    beforeEach(inject(function (_$rootScope_, _ProductService_) {
      ProductService = _ProductService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing',function(){
      it('someThing',function(){

      });
    });
  });
})();