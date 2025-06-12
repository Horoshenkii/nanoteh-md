import React, { useState } from 'react'
import products from '../data/products.json'
import { Link } from 'react-router'
import { FaRegTrashCan } from "react-icons/fa6";


const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  if (cartItems.length > 0) 
  {
    const getCartItems = () => {
    let data = []

    cartItems.forEach((cartItem) => {
      const product = products.find((pro) => pro.id === cartItem.productId)
      data.push({
        product,
        id: cartItem.id,
        quantity: cartItem.quantity
      })
    })

    return data
  }

  const cartProducts = getCartItems()

  const removeProduct = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id)
    setCartItems(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const totalPrice = () => {
    let price = 0

    for (let item of cartProducts) {
      price += item.product.price * item.quantity
    }

    return price
  }

    return (
      <>
      <section className='lg:ml-[400px] lg:mr-[100px]'>
        <div className='w-[95%] m-auto lg:w-full'>
            <h1 className='text-[#4169E1] font-bold text-2xl mt-10 mb-5'>Cart</h1>
          <ul className='grid grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-4'>
          {cartProducts.map((cartPro) => (
            <li
            className='group bg-zinc-600 rounded-2xl shadow-md hover:shadow-lg/50 hover:shadow-[#4169E1] flex justify-between'>
              <Link 
              to={`/product/${cartPro.product.slug}`}
              className='h-full flex gap-5 w-[70%]'>
              <div className='bg-white rounded-xl w-[60%] px-10 py-8 flex items-center justify-center'>
                <div className='w-full h-[180px] xl:h-[250px]'>
                  <img className='h-full w-full group-hover:scale-[1.03] duration-250 object-contain' src={cartPro.product.image} alt={cartPro.product.name} loading='lazy'/>
                </div>
              </div>
              <div className='flex flex-col justify-center w-[40%]'>
              <div>
                <p className='text-white font-semibold text-lg mt-2 mb-1'>{cartPro.product.name}</p>
                <ul className='flex flex-wrap gap-1 mb-3'>
                {Object.entries(cartPro.product.specs).map(([key, value]) => (
                  <li>
                    <p className='text-zinc-300 text-xs font-semibold'>{value} |</p>
                  </li>
                  ))}
                </ul>
              </div>
              </div>
            </Link>
              <div className='flex flex-col gap-5 justify-between p-6'>
                <div className='flex items-end flex-col'>
                  <button 
                  onClick={() => removeProduct(cartPro.id)}
                  className='text-white p-2 bg-[#4169E185] rounded-lg duration-150 hover:bg-[#4169E1]'><FaRegTrashCan /></button>
                </div>
                <div className='flex flex-col gap-2 items-end'>
                  <p className='text-[#4169E1] w-[100px] rounded-md text-center bg-white font-semibold text-lg'>{(cartPro.product.price * cartPro.quantity).toFixed(2)}$</p>
                  <p className='text-[#4169E1] w-[50px] bg-zinc-200 rounded-md text-center font-semibold text-lg'>{cartPro.quantity}x</p>
                </div>
              </div>
          </li>
        ))}
      </ul>
        </div>
      </section>
      <section className='lg:ml-[400px] lg:mr-[100px] mt-[80px]'>
        <div className='border-t-2 border-zinc-700 w-[95%] m-auto lg:w-full'>
          <p className='text-zinc-700 mt-8 text-2xl font-bold'>Total price:  {totalPrice().toFixed(2)}$</p>
          <button className='text-xl rounded-xl mt-4 font-semibold text-white bg-[#4169E1] px-8 py-2 cursor-pointer hover:bg-[#5e41e1]'>Buy Now</button>
        </div>
      </section>
      </>
    )
  }
  else
  {
    return (
      <div className='lg:ml-[400px] lg:mr-[100px] mt-[80px] flex flex-col items-center justify-center'>
        <p className='text-3xl font-bold text-zinc-600'>Cart is empty</p>
        <p className='text-2xl font-bold text-zinc-600'>Help it fill up, go back to shopping!</p>
      </div>
    )
  }

}

export default Cart
