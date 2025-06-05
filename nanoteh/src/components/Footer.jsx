import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router';
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='mt-20 flex flex-col gap-5 lg:ml-[400px] lg:mr-[100px] mb-6'>
        <div className='bg-zinc-600 flex p-8 flex-col gap-3 w-[95%] m-auto rounded-xl lg:w-full'>
          <div className='flex gap-5'>
            <p className='text-white font-semibold text-xl'>Follow us:</p>
            <a target="_blank" href="https://www.facebook.com/"><GrFacebookOption className='text-white duration-150 hover:text-[#4169E1] text-[30px]'/></a>
            <a href="mailto:example@gmail.com"><IoIosMail className='text-white duration-150 hover:text-[#4169E1] text-[30px]'/></a>
          </div>
          <div className='mt-3 flex flex-col  gap-1'>
            <p className='text-white font-semibold text-xl'>Sign up for our newsletter</p>
            <p className='text-zinc-200'>and keep up with all the promotions and discounts!</p>
            <div className='flex items-center mt-3 gap-3'>
            <input placeholder='Enter your email' type="text" className='text-zinc-800 font-semibold outline-none rounded-xl bg-zinc-500 h-10 px-3 w-[300px]'/>
            <button className='cursor-pointer text-white font-semibold px-3 rounded-xl bg-[#4169E1] h-10'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 w-[95%] m-auto rounded-xl bg-zinc-100 p-8 lg:w-full lg:grid-cols-3'>
          <div>
            <Link to='/'><img src="/images/MainLogo.png" alt="Nanoteh" className='w-[150px]'/></Link>
            <p className='font-bold text-zinc-700 text-sm mt-4 mb-2'>Why online store Nanoteh​?</p>
            <ul className='flex flex-col gap-2'>
              <li className='text-zinc-600 font-semibold text-sm'>Unbeatable Prices!</li>
              <li className='text-zinc-600 font-semibold text-sm'>Genuine products!</li>
              <li className='text-zinc-600 font-semibold text-sm'>Official warranty!</li>
              <li className='text-zinc-600 font-semibold text-sm'>Unprejudiced staff!</li>
              <li className='text-zinc-600 font-semibold text-sm'>Secure shopping with SSL certificate!</li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-zinc-700 text-lg mt-4 mb-2 lg:mt-0'>Contact us:</p>
            <ul className='flex flex-col gap-2'>
              <li className='hover:text-[#4169E1] duration-150 text-zinc-600 font-semibold text-sm'><a href="https://www.google.com/maps/place/Internet+Shop+NANOTEH.MD/@47.0077826,28.8630473,17z/data=!4m21!1m15!4m14!1m6!1m2!1s0x0:0x61dd722595102b9c!2sNanoteh+SRL!2m2!1d28.8646838!2d47.008025!1m6!1m2!1s0x40c97c0504f025e5:0x61dd722595102b9c!2sNanoteh+SRL,+29%2F1,1st+floor,TRANSSERVICE-M+Building,sos.Munchesht,Chisinau+MD-2001,+Chi%C8%99in%C4%83u!2m2!1d28.8646838!2d47.008025!3m4!1s0x40c97bc4384f501d:0xfc8284fc54d67151!8m2!3d47.008025!4d28.8646838">Chisinau city, Muncesti str. 29/1</a></li>
              <li className='hover:text-[#4169E1] duration-150 text-zinc-600 font-semibold text-sm'><a href="tel:+37379207287">+373 79 20 72 87</a></li>
              <li className='hover:text-[#4169E1] duration-150 text-zinc-600 font-semibold text-sm'><a href="mailto:example@gmail.com">office@nanoteh.md</a></li>
            </ul>
            <div className='flex gap-2 mt-2'>
              <FaCcVisa className='text-[#4169E1] text-[30px]'/>
              <FaCcMastercard className='text-orange-600 text-[30px]'/>
              <FaCcPaypal className='text-sky-600 text-[30px]'/>
            </div>
          </div>
          <div className='mt-4 lg:mt-0'>
            <p className='text-sm text-zinc-600'>The LTD "NANOTEH" company was founded in 2007. Nanoteh.MD Fiscal code's: 1007600013017. WE are VAT payers: 0403581. Our legal support by LTS. All rights reserved. We deliver world-class brands of digital, household and professional appliances, chemicals, tools, office equipment and accessories throughout Moldova, not to mention gadgets and other goodies. We work as an online store with B2B and B2C clients.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer
