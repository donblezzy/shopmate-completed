import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from "../assets/logo.svg"
import { useCart } from '../CartContext/CartContext'
import "./Header.css"

const Header = () => {
    // To update the cart in the Header
    const {cartList} = useCart();
    
    return (
        <header>
            <Link to="/" className="logo">
                <img  src={Logo} alt="" />
                <span>Shopping Cart</span>
            </Link>

            <nav className='navigation'>
            <NavLink to="/" className="link" end>Home</NavLink>
            <NavLink to="/cart" className="link">Cart</NavLink>  
            </nav>

            <Link to="/" className="items">
            {/* To update the cart in the Header */}
                <span>Cart: {cartList.length}</span>
            </Link>


        </header>
    )
}

export default Header
