import React from 'react'
import { Link } from 'react-router'
import { MdFiberNew } from "react-icons/md";
import { MdOutlinePhonelink } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { PiOfficeChairBold } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { IoMdTv } from "react-icons/io";
import { BsScooter } from "react-icons/bs";
import categories from "../data/categories.json"

const icons = {
  2: <MdOutlinePhonelink className='text-[22px] text-white'/>,
  3: <FaComputer className='text-[22px] text-white'/>,
  4: <PiOfficeChairBold className='text-[22px] text-white'/>,
  5: <IoMdTv className='text-[22px] text-white'/>,
  6: <CgSmartHomeRefrigerator className='text-[22px] text-white'/>,
  7: <BsScooter className='text-[22px] text-white'/>
}

const names = {
  2: 'Phones, Laptops',
  3: 'Computers',
  4: 'Devices',
  5: 'TV',
  6: 'For Home',
  7: 'Transport'
}

const Categories = ( { switchMenu } ) => {
  return (
    <nav
        className='w-full'>
          <ul className='flex flex-col'>
            <li>
              <Link 
              to="/new-products"
              onClick={switchMenu}
              className='w-full h-16 flex items-center px-16 gap-4'>
                <MdFiberNew className='text-[22px] text-white'/>
                <p className='text-white font-semibold text-lg'>New Products</p>
              </Link>
            </li>
            {categories.map((category) => (
            <li key={category.id}>
              <Link 
              onClick={switchMenu}
              to={`category/${category.slug}`} 
              className={`w-full h-16 flex items-center px-16 gap-4 ${category.id % 2 === 0 ? 'bg-zinc-600' : ''}`}>
                {icons[category.id]}
                <p className='text-white font-semibold text-lg'>{names[category.id]}</p>
              </Link>
            </li>
            ))}
          </ul>
      </nav>
  )
}

export default Categories
