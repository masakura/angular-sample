(function(){
  'use strict';

  function ProductService(){
    
    var mockData = {
          $valid: true
        };

    var someSpy = jasmine.createSpy().and.returnValue({
      then:function(cb){
        cb(mockData);
        return {
          catch: function () {
            /* Default Case Not Exeption; */
          }
        };
      }
    });

    return {
      some: someSpy,
      mockData: mockData
    };
  }

  angular.module('cartsample.mock.service.product',[])
    .factory('ProductService', ProductService);
})();