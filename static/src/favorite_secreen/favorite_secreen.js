odoo.define('test.FavoriteSereenProduct', function (require) {
    "use strict";
    const PosComponent = require("point_of_sale.PosComponent");
    const Registries = require("point_of_sale.Registries");
    const { onWillStart } = owl


    class FavoriteSereenProduct extends PosComponent{
        setup(){
            super.setup()
            console.log('hloo owl najjari')
              console.log("POS DB", this.env.pos.db)
        }
    }
    
    FavoriteSereenProduct.template='FavoriteSereenProduct';
    Registries.Component.add(FavoriteSereenProduct)
 
    return FavoriteSereenProduct

})
    
 