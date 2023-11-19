
import React from 'react'
interface Amount{
    amount:Number
}

const FormatedPrice = ({amount}:Amount) => {
    const amt =new Number(amount).toLocaleString("en-US",{
        style:"currency",
        currency:"USD",
        minimumFractionDigits: 2,
    });
  return <span>{amt}</span> 
}

export default FormatedPrice
