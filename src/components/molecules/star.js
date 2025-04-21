import React from 'react'

import {RiStarSLine,RiStarSFill,RiStarHalfLine,RiStarHalfSLine} from "react-icons/ri"

export default function star(props) {
    const rating=props.stars.rate;
    const max=5
    let left=0
    const solid=()=>{
        let arr=[]
        for(let i=0;i<Math.round(rating);i++){
            arr.push(<RiStarSFill size={20}/>)
        }
        left=max-arr.length
        return arr
    }
    const empty=()=>{
        let arr=[]
        for(let i=0;i<left;i++){
            arr.push(<RiStarSLine size={20}/>)
        }
        return arr
    }
  return (
    <div className='flex items-center'>
        {
           solid()
        }
        {
            empty()
        }
      {rating}
    </div>
  )
}
