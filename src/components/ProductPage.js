import React ,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import Star from './molecules/star';
import { CartContext } from './cart/cart';
const const_json = {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  };
export default function ProductPage() {
    const [json,setjson]=useState(const_json)
    const { addToCart}=useContext(CartContext)
    const id=useParams()
    const url="https://fakestoreapi.com/products/"+id.product
    const fetch_data=async()=>{
        const resp=await fetch(url)
        const data=await resp.json()
        setjson(data)
    }
    useEffect(()=>{fetch_data()},[])
  return (
    <div>
      <Navbar/>
      <div className='flex flex-wrap mt-10 gap-10 justify-around'>
      <div className='border-2 my-5 bg-black'><img className='mx-10 p-4 h-[50vh]' src={json.image} alt="product"/></div>
      <div className='w-[50vw] p-4 border-2 text-left m-2'>
        <h1 className='text-3xl font-semibold mb-3'>{json.title}</h1>
       
        <Star stars={json.rating}/>
        <hr className='mb-5'/>
        <p>{json.description}</p>
        <p>{"₹"+json.price}</p>
        <hr className='bg-black'/>
        <div className='flex gap-10 mt-5'>
        <button onClick={()=>addToCart(json)} className='rounded-xl w-[10vw] px-4 py-1 bg-[#ffd814]' >Add to Cart</button>
        <button className='rounded-xl w-[10vw] px-4 py-1 bg-[#ffa41c]'>Buy Now</button>
        </div>
      </div>
      <div><h1>{"M.R.P:₹"+json.price}</h1></div>
      </div>
    </div>
  )
}
