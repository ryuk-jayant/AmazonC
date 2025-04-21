import React, { useEffect, useState } from 'react'
import {MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft} from "react-icons/md"
const img_list=["https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/GW/Phase1/Unrec/D98486283_Jupiter1_PC_Hero_3000x1200._CB575915971_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Homepage_DesktopHeroTemplate_3000x1200_22June2023_rec._CB575785393_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_HERO_NTA_Day-1_2X_EN._CB575872412_.jpg"]
export default function ImgCar() {
const [index,setindex]=useState(0)
useEffect(()=>{
  setTimeout(()=>{Inc()},3500)
})
const Inc=()=>{
    index===img_list.length-1?setindex(0):setindex(index+1)
    // console.log(2)
}
const Dec=()=>{
    index===0?setindex(img_list.length-1):setindex(index-1)
}
  return (
    <div className="relative h-[80vh]">
    <div className='w-full h-full bg-cover bg-center transition-all' style={{backgroundImage:`url(${img_list[index]})`,pointerEvents:"visible"}}></div>
    <div class="absolute opacity-1000 top-[10%] z-10 bg-gradient-to-b from-[#ffffff00] via-[#ffffff00] to-white h-[70vh] lg:h-[80vh] w-full" />
      <MdOutlineKeyboardArrowLeft className='absolute z-10 left-10 top-[40%]' onClick={()=>{Inc()}} size={70}/>
      <MdOutlineKeyboardArrowRight className='absolute z-10 right-10 top-[40%]' onClick={()=>{Dec()}} size={70}/>
        
    </div>
  )}
