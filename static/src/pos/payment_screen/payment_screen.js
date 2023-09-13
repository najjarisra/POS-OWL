/** @odoo-module*/
import Registries from 'point_of_sale.Registries'
import PaymentScreen from 'point_of_sale.PaymentScreen'
/**
* const AExt1 = A => class extends A {}
     * Registry.extend(A, AExt1) */
const PaymentScreenInherit = (payment_screen) => class extends payment_screen {

    setup() {
        super.setup()
        console.log('first PaymentScreenInherite pos odoo')


    }
    addNewPaymentLine({ detail: paymentMethod }) {

        const PaymentLine1 = super.addNewPaymentLine({ detail: paymentMethod })

        console.log('addNewPayment LineaddNewPaymentLine  addNewPaymentLine')

        console.log(PaymentLine1)
        return PaymentLine1

    }

}

Registries.Component.extend(PaymentScreen, PaymentScreenInherit)