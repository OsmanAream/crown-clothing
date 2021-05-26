import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'

import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>
                    )
                : 
                <span className = 'empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
        dispatch(toggleCartHidden())
        history.push('/checkout')}}>
            GO TO CHECK OUT
        </CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))