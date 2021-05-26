
export const addItemToCart = (cartItems, newItem) => {
    const existingCartItem= cartItems.find(item=>
        item.id === newItem.id
    )

    if(existingCartItem){
       return cartItems.map( item =>
            item.id===newItem.id?
             {...item,quantity:item.quantity+1}
            : item
            )
    }
    return [...cartItems , {...newItem, quantity: 1}]
    
}

export const removeItemFromCart = (cartItems, item) => 
    cartItems.filter(cartItem => cartItem.id !== item.id)

export const decreaseQuantity = (cartItems,item) =>
    cartItems.map( cartItem => 
       { 
           if(cartItem.id === item.id  && cartItem.quantity>1) {
               return { ...cartItem,quantity: cartItem.quantity - 1}
            }
            else return cartItem
        }
    )

