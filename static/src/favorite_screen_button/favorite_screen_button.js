odoo.define('point_of_sale.FavoritScreenButton', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
   
    const Registries = require('point_of_sale.Registries');

    class FavoritScreenButton extends PosComponent {
        setup() {
            super.setup();
            console.log("FavoritScreenButton")
            
        }

        

               
    }
    
    FavoritScreenButton.template = 'FavoritScreenButton';
    
    ProductScreen.addControlButton({
        component: FavoritScreenButton,
        position: ['before', 'SetPricelistButton'],
                condition: function () {
            return true;
        },
    });

    
    Registries.Component.add(FavoritScreenButton);

    return FavoritScreenButton;
});
