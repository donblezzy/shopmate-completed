import React, { useEffect, useState } from 'react'
import { useCart } from '../CartContext/CartContext'
import './ProductCard.css'

const ProductCard = ({product}) => {
  // const {addToCart, cartList} = useCart()
  const { cartList, addToCart, removeFromCart } = useCart()

  // To Show Add To Cart & Remove button
  const [isInCart, setIsInCart] = useState(false)

  const {name, price, image, id} = product

  // function handleAdd() {
  //   addToCart(product)
  //   console.log(cartList)
  // }

  // To Show Add To Cart & Remove button
  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id)
    if(productIsInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  },[cartList, id])


  return (
    <div className='productCard'>
    <img src={image} alt={name} />
    <p className='name'>{name}</p>
    <div className='action'>
        <p>${price}</p>
        {/* once you click on the button it should add */}
        { isInCart ? (<button className='remove' onClick={() => removeFromCart(product)}>Remove</button>) : (<button onClick={() => addToCart(product)}>Add To Cart</button>) }
        {/* <button onClick={() => addToCart(product)}>Add To Cart</button> */}
    </div>
      
    </div>
  )
}

export default ProductCard
