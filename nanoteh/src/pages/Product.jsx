import React from 'react'
import { useParams } from 'react-router'
import products from '../data/products.json'
import { FaShoppingBasket } from "react-icons/fa";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import categories from "../data/categories.json"
import { Link } from 'react-router';
import { toast, Bounce } from 'react-toastify';

const Product = () => {
    
    const { productSlug } = useParams()
    
    const product = products.find(pro => pro.slug === productSlug)

    if (!product)
    {
        return (
            <section className='m-auto lg:mr-[100px] pt-32 pb-32 lg:ml-[400px] flex flex-col items-center'>
                <p className='font-bold text-zinc-600 text-xl'>404</p>
                <p className='font-bold text-zinc-600 text-2xl'>Product not found</p>
            </section>
        )
     }

    const category = categories.find(cat => cat.id === product.categoryId)

    if (product && category) {

        const recommendedProducts = products.filter(recommendedProduct => 
            recommendedProduct.categoryId === category.id &&
            recommendedProduct.id !== product.id
        )

        const [months, setMonths] = useState('12')

        const addToCart = () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || []

            const existingProduct = cart.find((cartItem) => cartItem.productId === product.id)
            if (existingProduct)
            {
                cart = cart.map((cartItem) => {
                    if (cartItem.productId === product.id)
                    {
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity + quantity
                        }
                    }
                    return cartItem
                })
            }
            else
            {
                cart.push({
                id: Date.now(),
                productId: product.id,
                quantity: quantity
                })
            }

            localStorage.setItem("cart", JSON.stringify(cart))

            setQuantity(1)

            toast.success('Product added to cart', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

        const [quantity, setQuantity] = useState(1)

        return (
            <section className='lg:ml-[400px] lg:mr-[100px] mt-[50px]'>
                <h1 className='text-xl font-bold text-[#4169E1] w-[95%] m-auto mb-5 lg:w-full'>{product.name}</h1>
                <div className='flex w-[95%] m-auto lg:w-full gap-5 flex-col xl:flex-row'>
                    <div className='w-[100%] lg:w-[100%] h-[400px] xl:h-[520px] p-15 pt-20 bg-white rounded-lg'>
                        <img className='m-auto w-full h-full object-contain hover:scale-[1.2] duration-300' src={product.image} alt={product.name} loading='lazy'/>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='bg-zinc-600 rounded-lg'> 
                            <ul className='px-6 py-4'>
                                <p className='text-[#4169E1] font-bold text-lg'>Specs:</p>
                            {Object.entries(product.specs).map(([key, value]) => (
                                <li className='text-white font-semibold'><span className='text-zinc-400'>{key}</span> : {value}</li>
                            ))}
                            </ul>
                        </div>
                        <div className='bg-white py-10 rounded-lg'>
                            <div className='flex xl:items-start items-center xl:gap-4 m-auto w-[95%] lg:px-5 justify-between'>
                                <div className='bg-[#E6E6FA] rounded-xl flex flex-col justify-between gap-4 items-center pt-5 h-[150px]'>
                                    <div>
                                        <button
                                        className='w-8 h-8 rounded-full bg-white'
                                        onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev)}>
                                        -</button>
                                        <input
                                        className='focus:outline-none text-center font-semibold text-zinc-800 text-lg'
                                        onChange={(ev) => setQuantity((prev) => ev.target.value !== "" && +ev.target.value > 0 && +ev.target.value <= 100 ? +ev.target.value : "")}
                                        onBlur={(ev) => {
                                            if (ev.target.value === "")
                                            {
                                                setQuantity(1)
                                            }
                                        }} 
                                        type="number"
                                        min="1" max="100" value={quantity} />
                                        <button
                                        className='w-8 h-8 rounded-full bg-white'
                                        onClick={() => setQuantity((prev) => prev < 100 ? prev + 1 : prev)}>
                                        +</button>
                                    </div>
                                    <button
                                    onClick={addToCart} 
                                    className='cursor-pointer flex gap-3 rounded-xl items-center p-7 group hover:bg-[#d1d1ff] duration-200'>
                                        <p className='font-semibold text-lg text-zinc-800 group-hover:text-[#4169E1] duration-200'>{(product.price * quantity).toFixed(2)}$</p>
                                        <FaShoppingBasket className='text-zinc-800 text-xl group-hover:text-[#4169E1] duration-200'/>
                                    </button>
                                </div>
                                <div className='rounded-lg flex flex-col items-center gap-3 p-4 justify-center bg-[#bbbbe6] h-[150px]'>
                                    <div className='flex gap-2 items-center flex-col lg:flex-row'>
                                    <p className='text-zinc-800 text-lg font-semibold'>Take credit for</p>
                                    <select
                                    id='months'
                                    value={months}
                                    onChange={(e) => setMonths(Number(e.target.value))}
                                    className='bg-[#E6E6FA] appearance-none outline-none py-2 px-4 rounded-lg cursor-pointer text-[#4169E1] font-semibold'>
                                        <option value="12">12 months</option>
                                        <option value="24">24 months</option>
                                        <option value="36">36 months</option>
                                    </select>
                                    </div>
                                    <p className='font-semibold border-t-2 border-white w-full text-center pt-2'>{months === 12 ? ((product.price * quantity) * 1.2 / months).toFixed(2) + '$ per month' :
                                    months === 24 ? ((product.price * quantity) * 1.4 / months).toFixed(2) + '$ per month' :
                                    ((product.price * quantity) * 1.6 / months).toFixed(2) + '$ per month'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-zinc-400 px-6 py-4 rounded-lg'>
                            <p className='text-[#4169E1] font-bold text-lg mb-1'>Description:</p>
                            <p className='text-zinc-800 font-semibold'>{product.description}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-[100px] w-[95%] m-auto lg:w-full'>
                    <p className='text-[#4169E1] text-2xl font-semibold mb-5'>Recommended products</p>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    breakpoints={{
                        0: {
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                    }}          
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {recommendedProducts.map(product => (
                        <SwiperSlide>
                            <Link 
                            to={`/product/${product.slug}`}
                            className='h-[40dvh] lg:h-[45dvh] flex flex-col justify-between bg-zinc-600 rounded-2xl'>
                                <div className='bg-white max-h-[50%] rounded-xl p-8 mb-3'>
                                    <img className='m-auto w-full h-full group-hover:scale-[1.03] duration-250 object-contain' src={product.image} alt={product.name} loading='lazy'/>
                                </div>
                                <div className='px-5'>
                                    <p className='text-white font-semibold text-md xl:text-lg mt-2 mb-1'>{product.name}</p>
                                    <ul className='flex flex-wrap gap-1 mb-3'>
                                    {Object.entries(product.specs).map(([key, value]) => (
                                        <li className='hidden lg:block'>
                                            <p className='text-zinc-300 text-xs font-semibold'>{value} |</p>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                <button className='px-5 flex justify-between mb-5'>
                                    <p className='text-[#4169E1] w-[100px] rounded-md text-center bg-white font-semibold text-lg'>{product.price}$</p>
                                    <button className='text-white p-2 bg-[#4169E185] rounded-lg duration-150 hover:bg-[#4169E1]'><FaShoppingBasket /></button>
                                </button>
                            </Link>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        )
    }
}

export default Product
