import React from 'react'
import { ProductProps } from '../../type'
import Product from './Product'



const ProductsList = ({productData}:any) => {
  //console.log(typeof productData);
  return (
    <>
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
     {
      productData.map((item:ProductProps) =>(
        
        <Product key={item._id} item={item}/>
      ))
     }        
    
    </div>
    </>
  
  )
}

export default ProductsList