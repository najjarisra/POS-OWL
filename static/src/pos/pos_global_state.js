/** @odoo-module*/
import Registries from 'point_of_sale.Registries'
import { PosGlobalState } from 'point_of_sale.models'

const { onWillStart } = owl
/**
 * class PosGlobalState extends PosModel {
    constructor(obj) {
        super(obj);
 * 
 * 
 * 
* const AExt1 = A => class extends A {}
     * Registry.extend(A, AExt1) */
const PosGlobalStateInherit = (models) => class extends models {
    constructor(obj) {
        super(obj);
        console.log('inherited PosGlobalState', obj)
        this.favorite_product2 = this.GFV()
       


}
async  GFV(){
    const data = await this.env.services.rpc({
        'model': 'product.product',
        'method': 'GFV',
        'args': [{}]
            
        })
        return data
}

}

Registries.Model.extend(PosGlobalState, PosGlobalStateInherit)