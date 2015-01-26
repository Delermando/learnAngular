
(function(){ //wrap your app in a Closure
    var app = angular.module('store',[]);
    
    app.controller('StoreController', function(){ //create e name a controller
        this.products =  [ 
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '. . .-',
            images:[
                {
                     full: 'views/img/celta01.jpg',
                    thumb: 'c-00-thumb.jpg',
                },
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "del@hotmail.com"
                },{
                    stars: 1,
                    body: "this product sucks",
                    author: 'd@hot.com'
                }
            ]
        },
        {
            name: 'Pentagonal',
            price: 5.95,
            description: '. . .-',
             images:[
                {
                     full: 'views/img/celta02.jpg',
                    thumb: 'c-00-thumb.jpg',
                },
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "del@hotmail.com"
                },{
                    stars: 1,
                    body: "this product sucks",
                    author: 'd@hot.com'
                }
            ]
        }
    ]
     });
    app.controller('PanelController', function(){
        this.tab = 2;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
        this.setCurrent = function(newGallery){
            this.current = newGallery || 0;
//            se current esta setado ele é igual a variavel de parametro se nao ele e iguak a 0
        };
    });
    
    app.controller("ReviewController", function(){
        this.review = {};
        
        this.addReview = function(product){
            product.reviews.push(this.review);
             this.review = {};
        };
    });
})();

