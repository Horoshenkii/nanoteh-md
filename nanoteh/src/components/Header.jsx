import React from 'react'
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router"
import { MdWindow } from "react-icons/md";
import FirstNav from '../smallComponents/FirstNav';
import Categories from '../smallComponents/Categories';
import EditedFirstNav from '../smallComponents/EditedFirstNav';
import EditedCategories from '../smallComponents/EditedCategories';
import { GoDotFill } from "react-icons/go";

const Header = () => {
  const [openNav, setOpenNav] = useState(false)
  const [openCategories, setOpenCategories] = useState(false)

  return (
    <header className='px-2 lg:px-0'>
{/* First Nav for phones: */}
      <nav className='fixed h-full w-full bg-zinc-700 duration-100 py-16 top-0'
      style={{
      right: openNav ? 0 : "-100%"
      }}>
        <button className='absolute right-4 top-5'
        onClick={() => setOpenNav(!openNav)}>
          <IoClose className='text-3xl text-zinc-400'/>
        </button>
        <FirstNav />
      </nav>
{/* First Nav for phones */}
{/* Categories for phones: */}
      <div className='fixed h-full w-full bg-zinc-700 duration-100 py-16 top-0'
      style={{
      right: openCategories ? 0 : "-100%"
      }}>
        <button className='absolute right-4 top-5'
        onClick={() => setOpenCategories(!openCategories)}>
          <IoClose className='text-3xl text-zinc-400'/>
        </button>
        <Categories />
      </div>
{/* Categories for phones */}
{/* Side Nav for PC (Categories): */}
      <div className='fixed left-0 top-1/2 -translate-y-1/2 bg-zinc-600 h-[95vh] w-[300px] hidden lg:flex flex-col rounded-tr-3xl rounded-br-3xl'>
        <Link className='m-7' to="/"><img src="/images/MainLogo.png" alt="Nanoteh" /></Link>
        <EditedCategories />
      </div>
{/* Side Nav for PC (Categories) */}
{/* main part: */}
      <div className='flex items-center h-[60px] gap-3 px-5 py-5 rounded-2xl lg:bg-zinc-600 lg:ml-[400px] lg:mr-[100px] mt-6'>
        <Link className='lg:hidden' to="/"><img src="/images/MainLogo.png" alt="Nanoteh" /></Link>
        <div className='items-center hidden lg:flex mr-3'>
          <GoDotFill  className='text-[#4169E1] text-3xl'/>
        <a href="tel:+37379207287" className='text-lg font-medium text-white text-nowrap'>079 20 72 87</a>
        </div>
        <div className='mr-2 flex p-4 items-center bg-zinc-400 gap-3 h-[40px] rounded-xl w-full shrink-3'>
          <FiSearch className='text-2xl text-zinc-600'/>
          <input type="text" placeholder='Search' className='w-full h-[40px] outline-none text-zinc-600 font-semibold'/>
        </div>
        <EditedFirstNav/>
        <button className='text-zinc-400 lg:hidden'
        onClick={() => setOpenNav(!openNav)}>
          <FiMenu className="text-2xl text-zinc-700" />
        </button>
        <button className='text-zinc-700 lg:hidden'
        onClick={() => setOpenCategories(!openCategories)}>
          <MdWindow className='text-2xl text-zinc-700'/>
      </button>
      </div>
{/* main part */}
    </header>
  )
}

export default Header
