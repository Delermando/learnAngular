
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
            images:[
                {
                     full: 'views/img/celta01.jpg',
                    thumb: 'c-00-thumb.jpg',
                },
            ]
        },
        {
            name: 'Pentagonal',
            price: 5.95,
            description: '. . .',
             images:[
                {
                     full: 'views/img/celta02.jpg',
                    thumb: 'c-00-thumb.jpg',
                },
            ]
        }
    ]
    app.controller('PanelController', function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
//        this.setCurrent = function(newGallery){
//            this.current = newGallery || 0;
////            se current esta setado ele é igual a variavel de parametro se nao ele e iguak a 0
//        };
    });
    
})();

