import React,{useContext} from "react";
import {Dropdowen_lang} from "./molecules/Dropdowen";
import {Dropdowen_sign} from "./molecules/Dropdowen";
import { LiaOpencart } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CartContext } from "./cart/cart";

import { Link } from "react-router-dom";
const style = {
  button: "px-2 py-1 border-2 border-[#131921] hover:border-white",
  input:
    "w-[50vw] p-2 rounded-lg text-black  focus:border-4 focus:border-[#febd69]",
};

export default function Navbar() {
 const {cartItems}=useContext(CartContext)
 
  return (
    <div className="bg-[#131921] text-white flex items-center justify-around">
      <Link to="/Home">
      <button className={style.button}>
        <img className="w-[100px]" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon img" />
      </button>
      </Link>
      <button className={"flex  flex-row" + style.button}>
        <MdOutlineLocationOn className="self-end" size={22} />
        <p className=" self-end text-left text-sm">
          Hello <p className="font-bold text-md">select your Address</p>
        </p>
      </button>
      <div className="flex relative m-1 rounded-lg overflow-hidden">
        <input className={style.input} placeholder="Search Amazon.in" />
        <button className="bg-[#febd69] py-3 px-3  absolute right-0">
          <BsSearch size={20} color="black" />
        </button>
      </div>
      <div className={style.button}>
        <Dropdowen_lang />
      </div>
      <div className={style.button}>
        <Dropdowen_sign />
      </div>
      <button className={"text-sm text-left" + style.button}>
        Returns <p className="font-bold text-md">& orders</p>
      </button>
      <Link to="/cart">
      <button className={"flex items-end text-lg" + style.button}>
        <p className="text-[#ffd876] leading-[0.4] text-lg"><b>{cartItems.length}</b><LiaOpencart color="white"size={40} /> </p>
        <p className="font-bold text-md">Cart</p>
      </button>
      </Link>
    </div>
  );
}

