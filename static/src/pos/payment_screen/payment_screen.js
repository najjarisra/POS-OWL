/** @odoo-module*/
import Registries from 'point_of_sale.Registries'
import PaymentScreen from 'point_of_sale.PaymentScreen'
/**
* const AExt1 = A => class extends A {}
     * Registry.extend(A, AExt1) */
const PaymentScreenInherit = (payment_screen) =>class extends payment_screen {

     setup(){
        super.setup()
        console.log('first hiretagehiretagehiretagehiretagehiretagehiretage pos odoo')


    }

}

Registries.Component.extend(PaymentScreen,PaymentScreenInherit)