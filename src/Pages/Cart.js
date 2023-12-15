import React from 'react'
import useTitle from '../Hooks/useTitle'
import { useCart } from '../CartContext/CartContext'
// OR
// import { CartContext } from '../CartContext/CartContext'
import Card from '../components/Card'

const Cart = () => {
  // we use total here to show the total down 
  const { total, cartList } = useCart()
  // or
  // const { total } = useContext(CartContext)

  

  useTitle("Cart")
  // console.log(cartList)

  // const products = [
  //   { "id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.jpg" },
  //   { "id": 2, "name": "bOAt Rockerz 450", "price": 49, "image": "/assets/images/1002.jpg" }
  // ]
  return (
    <main>
      <section className='cart'>
      {/* we use total here to show the amount by using useCart up */}
        <h1>Cart Items: {cartList.length} / ${total}</h1>
        {/* To display the select List of products */}
        {cartList.map((product) => (
          <Card key={product.id} product={product} />
        ))}

      </section>
    </main>
  )
}

export default Cart
