import React from 'react'
import { Link } from "react-router"
import { GrFavorite } from "react-icons/gr";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";


const EditedFirstNav = () => {
  return (
    <ul className='hidden lg:flex gap-6'>
        <li>
            <Link to="/" className='flex items-center flex-col relative group'>
                <FaRegUserCircle className='duration-150 group-hover:text-[#4169E1] text-white text-[30px]' />
                <p className='pointer-events-none whitespace-nowrap absolute top-full mt-1 opacity-0 group-hover:opacity-100 rounded-lg bg-[#4169E1] py-1 px-3 duration-150 text-white font-semibold text-md'>Login</p>
            </Link>
        </li>
        <li>
            <Link to="/"className='flex items-center flex-col relative group'>
                <GrLanguage className='duration-150 group-hover:text-[#4169E1] text-[30px] text-white'/>
                <p className='pointer-events-none whitespace-nowrap absolute mt-1 top-full opacity-0 group-hover:opacity-100 rounded-lg bg-[#4169E1] py-1 px-3 duration-150 text-white font-semibold text-md'>Language</p>
            </Link> 
        </li>
        <li>
            <Link to="/" className='flex items-center flex-col relative group'>
                <GrFavorite className='duration-150 group-hover:text-[#4169E1] text-[30px] text-white'/>
                <p className='pointer-events-none whitespace-nowrap text-white mt-1 font-semibold text-md absolute top-full opacity-0 group-hover:opacity-100 rounded-lg bg-[#4169E1] py-1 px-3 duration-150'>Favorites</p>
            </Link>
        </li>
        <li>
            <Link to="/" className='flex items-center flex-col relative group'>
                <MdOutlineCompareArrows className='duration-150 group-hover:text-[#4169E1] text-[30px] text-white'/>
                <p className='pointer-events-none whitespace-nowrap text-white mt-1 font-semibold text-md absolute top-full opacity-0 group-hover:opacity-100 rounded-lg bg-[#4169E1] py-1 px-3 duration-150'>Compare</p>
            </Link>
        </li>
        <li>
            <Link to="/" className='flex items-center flex-col relative group'>
                <FaShoppingBasket className='duration-150 group-hover:text-[#4169E1] text-[30px] text-white'/>
                <p className='pointer-events-none whitespace-nowrap text-white mt-1 font-semibold text-md absolute top-full opacity-0 group-hover:opacity-100 rounded-lg bg-[#4169E1] py-1 px-3 duration-150'>Basket</p>
            </Link>
        </li>
    </ul>
  )
}

export default EditedFirstNav
