import React from 'react'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import  CartIcon  from '../cart-icon/cart-icon.component'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'

import { DivHeader, LinkLogoContainer, DivOptions, LinkOption, DivOption } from './header.styles'

import { signOutStart } from '../../redux/user/user.actions'

const Header = ({ currentUser, hidden,signOutStart }) => (
    <DivHeader>
        <LinkLogoContainer  to ='/'>
            <Logo className='logo'/>
        </LinkLogoContainer>
        <DivOptions>
            <LinkOption to ='/shop'>
                SHOP
            </LinkOption>
            <LinkOption to ='/shop'>
                CONTACT
            </LinkOption>
            {
                currentUser ?
                <DivOption onClick={()=> signOutStart()} >SIGN OUT</DivOption>
                :
                <LinkOption to='/signin'>SIGN IN</LinkOption>
            }
            <CartIcon/>
        </DivOptions>
        {
            hidden? null: <CartDropdown/>
        }
    </DivHeader>
)

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart:()=> dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
