import React from 'react'
import {HiOutlineMenu} from "react-icons/hi"
const style = {
    button: "p-2 border-2 border-[#232f3e] hover:border-white",
    input:
      "w-[50vw] p-2 rounded-lg text-black  focus:border-4 focus:border-[#232f3e]",
  };
  const list=["Amazon miniTv","sell","Best seller","Today's Deals","Mobiles","Electronics","Customer Service","prime","New Releses","Gift Ideas","Home & Kitchen","Fashion","Computers","Amazon Pay","Books","Coupons"]
export default function Itembar() {
  return (
    <div className=' text-white font-semibold text-sm bg-[#232f3e]'>
      <div className='flex justify-around w-[98vw]'>
      <button className={'font-bold flex flex-row'+style.button}><HiOutlineMenu size={30}/><p className='self-center'>All</p></button>
      {list.map((ele)=>{
        return <button className={style.button}>{ele}</button>
      })}
      </div>
    </div>
  )
}
