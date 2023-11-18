import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import cartIcon from '../images/cartIcon.png'
import {SlLocationPin} from 'react-icons/sl'
import {HiOutlineSearch} from 'react-icons/hi'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
const Header = () => {
  return ( 
    <div className='w-full bg-amazon_blue h-20 text-lightText sticky top-0 z-50'>
      {/* logo */}
      <div className=' w-full h-full mx-auto inline-flex  items-center justify-center gap-1 px-4'>
        <div className=' border border-transparent hover:border-white duration-300 p-2 h-[70%] cursor-pointer'>
        <Image className='w-28 object-cover' src={logo} alt='logo'/>      
      </div>

     {/* delivery location */}
      <div className='hidden lg:inline-flex h-[70%] border border-transparent hover:border-white p-4  items-center justify-center cursor-pointer '>
       <span className='text-white w-5 h-5'><SlLocationPin/> </span>      
        <div>
        <p className='text-sm '>Deliver To</p>
        <p className='text-sm  font-bold text-white'>USA</p> 
        </div>
      </div>

    
      {/* search */}
      <div className='flex flex-1 h-10 relative'>
       <input className='w-full h-full rounded-md outline-none text-black border-[5px] border-transparent focus:border-yellow-500 ' type="text" placeholder='search items'/>   
      <span className='text-black text-2xl bg-amazon_yellow hover:bg-yellow-500 w-12 h-10 flex items-center justify-center absolute right-0 rounded-r-md cursor-pointer' >
      <HiOutlineSearch/>
      </span>   
      </div>
     
      {/* sign in */}
      <div className='h-[70%] border border-transparent hover:border-white mx-2 p-2 cursor-pointer'>
        <p>Hello, Sign In</p>
        <p className='text-white font-bold'>Account & List</p>
      </div>

      <div className='h-[70%] border border-transparent hover:border-white mr-2 p-2 hidden lg:inline-block cursor-pointer'>
        <p>Returns</p>
        <p className='text-white font-bold'>Orders</p>
      </div>

      {/* faveorit */}
      <div className=' hidden lg:inline-block text-4xl mr-2  border border-transparent hover:border-white p-2 relative cursor-pointer'>
        <MdOutlineFavoriteBorder/>
        <span className=' flex items-center justify-center rounded-full absolute font-bold text-lg text-black w-5 h-5 bg-yellow-400 right-0 bottom-8 text-center'> 0</span>
      </div>


      {/* cart */}
      <div className='flex items-center justify-center border border-transparent hover:border-white p-2 cursor-pointer'>
       <div className='relative '><Image className='w-12 object-cover' src={cartIcon} alt='Cart'/>
        
        <span className=' absolute left-[22px] bottom-4 font-bold text-md'> 0</span>
        </div>
        <p className='text-white font-bold text-lg pt-4 hidden lg:inline-flex'>Cart</p>
      </div>

      </div>
    </div>
  )
}

export default Header
