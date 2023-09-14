/** @odoo-module*/
import Registries from 'point_of_sale.Registries'
import ProductScreen from 'point_of_sale.ProductScreen'
/**
* const AExt1 = A => class extends A {}
     * Registry.extend(A, AExt1) */
const ProductScreenInherit = (product_screen) => class extends product_screen {

    setup() {
        super.setup()
            console.log(this.env.pos.db)
    }
    get faovoritProduct(){
        let products = this.env.pos.db.get_product_by_category(3);
        console.log('.product_by_id(5)',products)
        return products
    }

}

Registries.Component.extend(ProductScreen, ProductScreenInherit)