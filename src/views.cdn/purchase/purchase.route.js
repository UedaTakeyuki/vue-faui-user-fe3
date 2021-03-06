import PurchaseFront from './PurchaseFront.vue'
import PurchaseSucceeded from './PurchaseSucceeded.vue'
import Payments from './Payments.vue'

export default {
  routes: [
    {
      path: '/purchaseFront',
      name: 'purchase',
      component: PurchaseFront
    },
    {
      path: '/purchaseSucceeded/:sessionID',
      name: 'purchaseSucceeded',
      component: PurchaseSucceeded
    },
    {
      path: '/payments',
      name: 'payments',
      component: Payments
    },
  ],
  menuItem: { icon: 'shop', text: 'Purchase', route: '/purchaseFront'},
}