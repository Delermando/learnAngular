
(function(){ //wrap your app in a Closure
    var app = angular.module('store',[]);
    
    app.controller('StoreController', function(){ //create e name a controller
        this.products = gems; //set the 'gem' like a attibute
    });
    
    var gems = [ 
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '. . .',
            canPurchase: false, 
            soldOut: false
        },
        {
            name: 'Pentagonal',
            price: 5.95,
            description: '. . .',
            canPurchase: false, 
            soldOut: false
        }
    ]
})();

