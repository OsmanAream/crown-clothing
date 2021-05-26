import React from 'react'

import './checkout-item.styles.scss'
import { removeItem, decreaseItemQuantity, addItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'



const CheckoutItem = ({addItem,decreaseItemQuantity,removeItem, cartItem}) => { 
    const { name, imageUrl, price, quantity } = cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> decreaseItemQuantity(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(cartItem)} >&#10005;</div>
        </div>)
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    decreaseItemQuantity: item => dispatch(decreaseItemQuantity(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)