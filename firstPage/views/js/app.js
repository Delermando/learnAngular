(function() {
  var app = angular.module('card', []);

  app.controller('StoreController', ['$http', function($http){
          
      var store = this;
      alert('Hello ');
      store.products = [];
        $http.get('store-products.json').success(function(data){
            store.products = data;
        });     
    }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();