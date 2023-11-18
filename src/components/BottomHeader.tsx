import React from 'react'
import {RiMenuFill} from 'react-icons/ri'

const BottomHeader = () => {
  return (
    <div className='h-14 bg-amazon_light flex text-white text-lg font-medium gap-4 items-center '>
        
        <div className='flex items-center p-2'>
            <span className=' text-4xl mx-1'><RiMenuFill/></span>
            <p className='text-lg font-bold '>All</p>
        </div>
        <p className='border border-transparent hover:border-white p-2 cursor-pointer'>Holiday Deals</p>
        <p className='border border-transparent hover:border-white p-2 cursor-pointer'>Medical Care</p>
        <p className='border border-transparent hover:border-white p-2 cursor-pointer'>Groceries</p>
        <p className='border border-transparent hover:border-white p-2 cursor-pointer'>Best Seller</p>
        <p className='border border-transparent hover:border-white p-2 cursor-pointer'>Amazon Basic</p>
        <p className='border border-transparent hover:border-white p-2 cursor-pointer'>Prime</p>
        

        
    </div>
  )
}

export default BottomHeader