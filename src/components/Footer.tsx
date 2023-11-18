import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className='h-25 w-full bg-amazon_blue text-white flex flex-col gap-2 p-4 items-center justify-center'>
        <Image src={logo} alt='logoImage'  className='h-full w-24 '/>
        <p>All rights are Reserved</p>
    </div>
  )
}

export default Footer