import React, { useState } from 'react'
import { Link } from 'react-router'
import { GrFavorite } from "react-icons/gr";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";


const FirstNav = () => {

    const [login, openLogin] = useState(false)

  return (
    <>
    {login && (
    <div className='fixed inset-0 flex justify-center pt-40 items-start backdrop-blur-xs bg-[rgba(0,0,0,0.2)] z-50'>
    <div className='bg-zinc-200 rounded-2xl w-[95%] p-8 lg:w-[30%] flex flex-col gap-4'>
      <div className='flex justify-between mb-4'>
        <p className='text-xl font-semibold text-zinc-500'>Log in to your account</p>
        <button
        onClick={() => openLogin(!login)}
        className='text-[30px] font-semibold text-zinc-500'><IoClose /></button>
      </div>
        <input placeholder='Enter your Email' className='h-13 text-zinc-800 font-semibold text-lg pl-3 bg-zinc-500 rounded-xl' type="text" />
        <input placeholder='Enter your Password' className='h-13 text-zinc-800 font-semibold text-lg pl-3 bg-zinc-500 rounded-xl' type="text" />
        <p className='w-full text-end text-[#4169E1] font-semibold text-lg cursor-pointer'>Forgot password?</p>
        <button className='text-white bg-[#4169E1] text-lg font-semibold px-10 h-13 rounded-xl duration-150 cursor-pointer hover:bg-[#6441e1]'>Sign in</button>
        <div className='flex items-center gap-5 justify-center'>
            <span className='w-1/5 h-0.5 bg-zinc-500'></span>
            <p className='font-semibold text-md text-zinc-500'>Continue with Google</p>
            <span className='w-1/5 h-0.5 bg-zinc-500'></span>
        </div>
        <div className='flex justify-center'>
        <button className='text-[30px] text-zinc-100 bg-zinc-500 py-2.5 px-10 rounded-xl duration-150 hover:bg-[#4169E1]'><FaGoogle /></button>
        </div>
        <button className='w-full text-center text-[#4169E1] font-semibold text-lg cursor-pointer'>Sign up</button>
    </div>
    </div>
  )}

    <ul className='flex flex-col'>
        <li>
            <button 
            onClick={() => openLogin(!login)}
            className='w-full bg-zinc-600 h-16 flex items-center px-16 gap-3'>
                <FaRegUserCircle className='text-white text-2xl' />
                <p className='text-white font-semibold text-lg'>Login</p>
            </button>
        </li>
        <li>
            <Link to="/"className='w-full h-16 flex items-center px-16 gap-4'>
                <GrLanguage className='text-[22px] text-white'/>
                <p className='text-white font-semibold text-lg'>Language</p>
            </Link>
        </li>
        <li>
            <Link to="/" className='w-full bg-zinc-600 h-16 flex items-center px-16 gap-4'>
                <GrFavorite className='text-[22px] text-white'/>
                <p className='text-white font-semibold text-lg'>Favorites</p>
            </Link>
        </li>
        <li>
            <Link to="/" className='w-full h-16 flex items-center px-16 gap-4'>
                <MdOutlineCompareArrows className='text-[22px] text-white'/>
                <p className='text-white font-semibold text-lg'>Compare</p>
            </Link>
        </li>
        <li>
            <Link to="/cart" className='w-full bg-zinc-600 h-16 flex items-center px-16 gap-4'>
                <FaShoppingBasket className='text-[22px] text-white'/>
                <p className='text-white font-semibold text-lg'>Cart</p>
            </Link>
        </li>
    </ul>
    </>
  )
}

export default FirstNav
