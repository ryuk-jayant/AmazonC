import React from 'react'
import { useState,useContext } from 'react'
import {TiArrowSortedDown} from "react-icons/ti"
import { SignContext } from '../Sign/Sign'
import { Link } from 'react-router-dom'
//dropdowen for choosing lang
export function Dropdowen_lang() {
    const [open,setopen]=useState("hidden")
    const [lang,setlang]=useState("EN")
    const change=()=>{open==="hidden"?setopen("block"):setopen("hidden")}
    const lang_select=e=>{
      console.log(e.target.value)
        setlang(e.target.value);
      }
  return (
    <div className='relative'>
        <button className='flex flex-row items-end' onClick={()=>{change()} }>{lang}<TiArrowSortedDown/></button>
        <div className={open}>
        <div className="z-20 absolute top-8 text-black text-left  bg-white w-[10vw] ">
            
          <div className='grid grid-cols-2 gap-10 p-10'>
            
              <input type="radio" id="EN" value="EN" checked={lang==="EN"} onChange={(e)=>{lang_select(e)}} /> EN
              <input type="radio" id="HI" value="HI" checked={lang==="HI"} onChange={(e)=>{lang_select(e)}}/> HI
              <input type="radio" id="Other" value="Other" checked={lang==="other"}  onChange={(e)=>{lang_select(e)}}/> Other
{/* 
<div>
        <label>
          <input type="radio" value="EN" checked={lang ==='EN'} onChange={lang_select} />
          <span>EN</span>
        </label>
        <label>
          <input type="radio" value="HI" checked={lang === 'HI'} onChange={lang_select} />
          <span>HI</span>
        </label>
      </div> */}
          </div>
        </div>
          
        </div>
    </div>
  )
}

//for signin option
export function Dropdowen_sign() {
  const {UserName}=useContext(SignContext)
  const [open,setopen]=useState("hidden")
  const change=()=>{open==="hidden"?setopen("block"):setopen("hidden")}
return (
  <div className='relative'>
      <button className='flex flex-row items-end text-left' onClick={()=>{change()} }><p className='text-xs'>Hello,{UserName}<br/> <b>Account & lists</b></p><TiArrowSortedDown/></button>
      <div className={open}>
        <div className="z-20 top-11 -left-48 absolute text-black text-left  bg-white w-[30vw] ">
          <div className='flex justify-center'>
          <Link to="/">
          <button className='p-1 px-16 bg-[#ffd814] text-md rounded-lg text-center m-4'>Signin</button>
          </Link>
          </div>
        </div>
      </div>
  </div>
)
}