import React from 'react'
import { useCart } from '../CartContext/CartContext'
import './Card.css'

const Card = ({ product }) => {
    const {removeFromCart} = useCart()
    // const {removeFromCart, cartList} = useCart()
    const { name, price, image } = product

      // function handleRemove() {
  //   removeFromCart(product)
  //   console.log(cartList)
  // }
    
    return (
        <main>
            <section className='cartCard'>
                <img src={image} alt={name} />
                <p className='productName'>{name}</p>
                <p className='productPrice'>${price}</p>
                {/* once you click on the button it should remove */}
                <button onClick={() => removeFromCart(product)}>Remove</button>
            </section>
        </main>
    )
}

export default Card 
