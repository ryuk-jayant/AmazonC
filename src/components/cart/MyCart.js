import React,{useContext} from 'react'
import { CartContext } from './cart'
import Navbar from '../navbar'
import { clear } from '@testing-library/user-event/dist/clear'
import { SignContext } from '../Sign/Sign'
import { useNavigate } from 'react-router-dom'
export default function MyCart() {
    const { cartItems,removeFromCart,clearCart,}=useContext(CartContext)
    let tot=0
    // console.log(cartItems)
    const navigate=useNavigate()
    const {UserName}=useContext(SignContext)
    const check_login=()=>{
        if(UserName!=null){
            console.log("user is "+UserName);
        }
        else{
            navigate("/");
        }
    }
  return (
    <div className='bg-gray-300'>
        <Navbar/>
        <div className='w-[70vw] ml-4 mt-10 bg-white'>
        <h1 className='m-4 text-3xl text-left'>Shopping Cart </h1>
        {cartItems.map((ele)=>{
            tot+=ele.price*ele.quantity
            return <div className='flex mt-12 gap-5'>
                <div className='ml-4 mx-2 h-40 aspect-square'><img className="object-scale-down"src={ele.image} alt="product"/></div>
                <div className='grid gap-2'>
                    <p className='text-lg font-semibold'>{ele.title}</p>
                    <p className='line-clamp-1'>{ele.description}</p>
                    <p className='font-semibold text-xl'>{"M.R.P:₹"+ele.price}</p>
                    <p className=''>Quant:<b>{" "+ele.quantity}</b></p>
                    <div className='flex gap-10'>
                    
                    <button onClick={()=>{removeFromCart(ele)}} className='rounded-xl '>Remove item</button>
                    </div>
                </div>
            </div>
        })}
        
        <hr className='mt-10 mb-2'/>
        <p className='text-xl '>{"("+cartItems.length+" items)"}<b>Subtotal =</b>{"₹ "+tot}</p>
        <button className='rounded-xl w-[10vw] m-4 my-5 px-4 py-1 bg-[#ffa41c]' onClick={()=>{check_login()}}>Buy Now</button>
        <button className='rounded-xl w-[10vw] m-4 my-5 px-4 py-1' onClick={()=>{clearCart()}}>Clear cart</button>
        </div>
        
    </div>
  )
}
