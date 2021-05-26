import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H8Rk2EHBwuqSunWkaX1xtdMlynx0DIuYDVzIxFwzZGfZvmQdgHYiaSb2jEksGnDO2lu71MkwGjhg0r8IyV8Ntmw008PqxNpDW'


    const onToken = token =>{
        //console.log(token)
        alert(`Payment Successful`)
    }

    return (
        <StripeCheckout 
          label='Pay Now'
          name='AK clothing ltd.'
          billingAddress
          shippingAddress
          image='https://sendeyo.com/up/d/f3eb2117da'
          description={`Your total is $${price} `}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton