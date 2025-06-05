import React from 'react'
import { Link } from 'react-router'
import { GrFavorite } from "react-icons/gr";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

const FirstNav = () => {
  return (
    <ul className='flex flex-col'>
        <li>
            <Link to="/" className='w-full bg-zinc-600 h-16 flex items-center px-16 gap-3'>
                <FaRegUserCircle className='text-white text-2xl' />
                <p className='text-white font-semibold text-lg'>Login</p>
            </Link>
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
            <Link to="/" className='w-full bg-zinc-600 h-16 flex items-center px-16 gap-4'>
                <FaShoppingBasket className='text-[22px] text-white'/>
                <p className='text-white font-semibold text-lg'>Basket</p>
            </Link>
        </li>
    </ul>
  )
}

export default FirstNav
