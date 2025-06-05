import { Link } from 'react-router'
import { MdFiberNew } from "react-icons/md";
import { MdOutlinePhonelink } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { PiOfficeChairBold } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { IoMdTv } from "react-icons/io";
import { BsScooter } from "react-icons/bs";
import categories from "../data/categories.json"
import React from 'react';

const icons = {
  2: <MdOutlinePhonelink className='text-[22px] text-white group-hover:text-[#4169E1] duration-100'/>,
  3: <FaComputer className='text-[22px] text-white group-hover:text-[#4169E1] duration-100'/>,
  4: <PiOfficeChairBold className='text-[22px] text-white group-hover:text-[#4169E1] duration-100'/>,
  5: <IoMdTv className='text-[22px] text-white group-hover:text-[#4169E1] duration-100'/>,
  6: <CgSmartHomeRefrigerator className='text-[22px] text-white group-hover:text-[#4169E1] duration-100'/>,
  7: <BsScooter className='text-[22px] text-white group-hover:text-[#4169E1] duration-100'/>
}

const names = {
  2: 'Phones, Laptops',
  3: 'Computers',
  4: 'Devices',
  5: 'TV',
  6: 'For Home',
  7: 'Transport'
}

const EditedCategories = () => {
  return (
    <nav>
          <ul className='flex flex-col'>
            <li
            className='mt-5 hover:text-blue-500 group w-full hover:bg-zinc-700 px-7 duration-100'>
              <Link 
              to="/new-products"
              className='h-16 flex items-center gap-4'>
                <MdFiberNew className='text-[22px] text-white group-hover:text-[#4169E1] duration-100'/>
                <p className='text-white font-semibold text-lg group-hover:text-[#4169E1] duration-100'>New Products</p>
              </Link>
            </li>
            {categories.map((category) => (
            <li 
            key={category.id}
            className='mt-5 hover:text-blue-500 group w-full hover:bg-zinc-700 px-7 duration-100'>
              <Link 
              to={`category/${category.slug}`} 
              className='h-16 flex items-center gap-4'>
                {icons[category.id]}
                <p className='text-white font-semibold text-lg group-hover:text-[#4169E1] duration-100'>{names[category.id]}</p>
              </Link>
            </li>
            ))}
          </ul>
      </nav>
  )
}

export default EditedCategories
