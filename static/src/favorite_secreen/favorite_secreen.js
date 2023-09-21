odoo.define('point_of_sale.FavoriteSereenProduct', function (require) {
    "use strict";
    const PosComponent = require("point_of_sale.PosComponent");
    const Registries = require("point_of_sale.Registries");
    const { onWillStart } = owl


    class FavoriteSereenProduct extends PosComponent{
        setup(){
            super.setup()
            console.log('hloo owl najjariFavorite Sereen Product  FavoriteSereenProduct')
        }
    }
    
    FavoriteSereenProduct.template='FavoriteSereenProduct';
    Registries.Component.add(FavoriteSereenProduct)
 
    return FavoriteSereenProduct

})
    
 