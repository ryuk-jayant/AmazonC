import React,{useState,useEffect} from "react";
import Star from "./molecules/star";
import { Link } from "react-router-dom";
const url="https://fakestoreapi.com/products?limit=20"
const const_json = [{
  id: 9,
  title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  price: 64,
  description:
    "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  category: "electronics",
  image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  rating: { rate: 3.3, count: 203 },
}];
export default function ProductList() {
    const [json,setjson]=useState(const_json)
    const fetch_data=async()=>{
        const resp=await fetch(url)
        const data=await resp.json()
        // console.log(data)
        setjson(data)
    }
    useEffect(()=>{fetch_data()},[])
  return <div className="">
    {json.map((ele)=>{
       
        return <Link to={"product/"+ele.id} relative="path">
        <button className="w-[20vw] rounded-xl m-4 border-2 p-4 text-left" id={ele.id}>
            <div className="flex p-2 justify-center">
            <img className="h-[30vh]" src={ele.image} alt="product"/>
            </div>
            <h1 className="font-semibold p-2">{ele.title}</h1>
            
            <Star stars={ele.rating}/>
            <p className="p-2 text-lg">{"M.R.P:₹"+ele.price}</p>
        </button>
        </Link>
    })}
  </div>;
}
