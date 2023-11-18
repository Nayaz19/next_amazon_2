import React, { Children, ReactElement } from 'react'
import Header from './Header'
import BottomHeader from './BottomHeader'
import Footer from './Footer'

interface React_element_Props{
  children:ReactElement,
}
const RootLayout = ({children}:React_element_Props) => {
  return (
    <>
    <Header/>
    <BottomHeader/>
    {children}
    <Footer/>
      
    </>
  )
}

export default RootLayout
