/**
 *
 *
 * @deprecated
 * @module components/home
 */
(function () {
  'use strict';

  /**
   * HomeController
   *
   * @class HomeController
   * @constructor
   */
  function HomeController() {
  	console.log('HomeController Constructor');
  }

  /**
  * My method description.  Like other pieces of your comment blocks,
  * this can span multiple lines.
  *
  * @method activate
  * @param {String} foo Argument 1
  * @param {Object} config A config object
  * @param {String} config.name The name on the config object
  * @param {Function} config.callback A callback function on the config object
  * @param {Boolean} [extra=false] Do extra, optional work
  * @return {Boolean} Returns true on success
  */
  HomeController.prototype.activate = function() {
    var products = [
      {id: 'item1', name: 'Item 1', price: 150},
      {id: 'item2', name: 'Item 2', price: 2324},
      {id: 'item3', name: 'Item 3', price: 92},
      {id: 'item4', name: 'Item 4', price: 430}
    ];

    var calculateTotal = function (list) {
      var total = 0;
      for (var key in list) {
        var item = list[key];
        total += item.product.price * item.number;
      }
      return total;
    };

    var cart = {
      items: {},
      total: function () {
        return calculateTotal(this.items);
      },
      add: function (product) {
        var item = this.items[product.id] = this.items[product.id] || {
          product: product,
          number: 0
        };

        item.number++;
      }
    };

    this.products = products;
    this.cart = cart;
  };

  HomeController.prototype.addCart = function (index) {
    var product = this.products[index];
    this.cart.add(product);
  };

  angular.module('cartsample.home', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
})();
