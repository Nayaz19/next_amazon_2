import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { StoreProps } from '../../type'

interface NextState{
    productData:StoreProps[],
    favouriteData:StoreProps[],
    allProducts:StoreProps[]
    userInfo:null|string,

}

const initialState:NextState  = {
 productData:[],
 favouriteData:[],
 allProducts:[],
 userInfo:null,
}

export const nextSlice = createSlice({
  name: 'next',
  initialState,

  reducers: {
    addToCard:(state,action) => {
       const existingProduct = state.productData.find((itm:NextState) => itm._id === action.payload._id)

       if(existingProduct){
        existingProduct.quantity += action.payload.quantity
       }
        else{
            state.productData.push(action.payload)
        }
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { addToCard } = nextSlice.actions

export default nextSlice.reducer