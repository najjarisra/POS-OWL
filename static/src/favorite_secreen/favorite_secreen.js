odoo.define('test.FavoriteSereenProduct', function (require) {
    "use strict";
    const PosComponent = require("point_of_sale.PosComponent");
    const Registries = require("point_of_sale.Registries");
    const { onWillStart } = owl


    class FavoriteSereenProduct extends PosComponent{
        setup(){
            super.setup()
            console.log('hloo owl najjariFavoriteSereenProduct  FavoriteSereenProduct')
        }
    }
    
    FavoriteSereenProduct.template='FavoriteSereenProduct';
    Registries.Component.add(FavoriteSereenProduct)
 
    return FavoriteSereenProduct

})
    
 