import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import ProductsList from '@/components/ProductsList'
import { ProductProps } from '../../type'

interface Props{
  productData:ProductProps
}

export default function Home({productData}:Props) {
 //console.log(productData);
  return (
    <main className='bg-gray-300'>
      <div className='max-w-screen-2xl mx-auto'>
  <Banner/>
  <div className='relative md:-mt-20 lg:-mt-32 z-20 mb-10'>
  <ProductsList productData={productData}/>
  </div>
  </div>
  
    </main>
  )
}

export const getServerSideProps = (async () => {
  const res = await fetch('https://fakestoreapiserver.reactbd.com/tech')
  const productData = await res.json()
  return { props: { productData } }
})