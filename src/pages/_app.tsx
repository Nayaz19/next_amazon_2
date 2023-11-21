import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '@/components/RootLayout'
import { Store } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { store } from '@/store/store'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='font-bodyFont'> 
    <Provider store={store}>

   <RootLayout>

    <Component {...pageProps} />

   </RootLayout>
   </Provider>
   </div>
  )
}
