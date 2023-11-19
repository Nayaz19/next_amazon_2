import React from 'react'
import Image from 'next/image'
import { HiShoppingCart } from "react-icons/hi";
import { IoIosHeart } from "react-icons/io";
import FormatedPrice from './FormatedPrice';

interface items {
  brand:string,
  category:string,
  description:string,
  image:string,
  isNew:boolean,
  oldPrice:number,
  price:number,
  title:string,
  _id:number
}

interface ProductProps{
  items:items
}

const Product = ({item}:any) => {
  return (
    <div className='w-full bg-white text-black rounded-lg p-4 group overflow-hidden relative'>

      <div className='w-full h-[260px] relative'>
      <Image className='w-full h-full object-cover scale-90 hover:scale-100 duration-300'
       src={item.image} width={300} height={300} alt="image" /> 

       <div className='w-10 h-24 rounded-lg  absolute right-0 bottom-10 border-[1px]
        border-gray-500 flex flex-col bg-white translate-x-20 group-hover:translate-x-0 transition-transform duration-300' >

       <span className='text-xl w-full h-full flex items-center justify-center border-b-[1px] border-gray-500 bg-transparent hover:bg-yellow-400' ><HiShoppingCart /></span>
       <span className='text-xl w-full h-full flex items-center justify-center bg-transparent hover:bg-yellow-400'><IoIosHeart/></span>
       </div>
       </div>
       <hr />
       <div className='flex flex-col gap-1'>
       <p className='text-gray-500 text-xs tracking-wide'>{item.category} </p>
     <p className='text-gray-500 font-semibold'> {item.title} </p>
     <p className='text-sm '> {item.description.substring(0, 120)} </p>
     <div> 
      <span className='absolute top-0 right-0 text-blue-500 animate-bounce text-xs p-2'>!save <FormatedPrice amount={item.oldPrice - item.price} /></span>

     <span className='mr-1 text-xs line-through'><FormatedPrice amount={item.oldPrice} /></span>
     <span className='text-sm font-bold'><FormatedPrice amount={item.price} /></span>    
     
     </div>
     
     <button className=' w-full bg-amazon_yellow hover:bg-yellow-500 h-10 rounded-lg'> Add To Cart</button>
      
     </div>
     
    </div>
  )
}

export default Product