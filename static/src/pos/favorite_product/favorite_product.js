/** @odoo-module*/
import Registries from 'point_of_sale.Registries'
import ProductScreen from 'point_of_sale.ProductScreen'
const { onWillStart } = owl;
/**
* const AExt1 = A => class extends A {}
     * Registry.extend(A, AExt1) */
const ProductScreenInherit = (product_screen) => class extends product_screen {

    setup() {
        super.setup()
        console.log(this.env.pos.db) 
        this.favorite_products = []
    

        onWillStart(async () => {
            const data = await this.env.services.rpc({
                'model': 'product.product',
                'method': 'search',
                'kwargs': {
                    'domain': [['product_tag_ids.name', '=','favorite']]
                }
               
            });
          
                this.favorite_products = data
            console.log('rpc data,', this.favorite_products)
        })
       
    }
    get faovoritProduct(){
        let products = this.env.pos.db.product_by_id;
        console.log('.product_by_id',products)
        let favorite = []
        this.favorite_products.forEach(p => favorite.push(products[p]))
        return favorite
    }

}

Registries.Component.extend(ProductScreen, ProductScreenInherit)