import React from 'react'
import ProductList from './ProductList'

const product=[
    {"id":2,
    "Title":"Great offers on wide range of TVs for every room",
   "imglinks":[
       {"link":"https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/JUP_23/2x_Desktop_Quad_card_w_title_-_Card_1_copy_40.5x_updated._SY116_CB575872363_.jpg",
       "qoute":"Budget TVs | Up to 60% off"},
       {"link":"https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/JUP_23/2x_Desktop_Quad_card_w_title_-_Card_1_copy_30.5x._SY116_CB575872363_.jpg","qoute":"4K TVs | Up to 12 months No Cost EMI"},
       {"link":"https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/JUP_23/2x_Desktop_Quad_card_w_title_-_Card_1_copy_20.5x._SY116_CB575872363_.jpg","qoute":"Big Screens | Up to 3 years warranty"},
       {"link":"https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/JUP_23/2x_Desktop_Quad_card_w_title_-_Card_1_copy0.5x._SY116_CB575872363_.jpg","qoute":"Ultra Premium TVs | Up to 50% off"}
   ]},
   {"id":3,
    "Title":"Starting ₹199 | Shoes & handbags",
   "imglinks":[
       {"link":"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Jupiter_2023/PCQC/Revised1/Sports_low._SY116_CB577519404_.png",
       "qoute":"Sports shoes"},
       {"link":"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Jupiter_2023/PCQC/Revised1/Men_low_res._SY116_CB577506297_.jpg","qoute":"Men's shoes"},
       {"link":"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Jupiter_2023/PCQC/Revised1/Heel_low_res._SY116_CB577506297_.jpg","qoute":"Women's shoes"},
       {"link":"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Jupiter_2023/PCQC/Revised1/hb_low._SY116_CB577519404_.png","qoute":"Handbags"}
   ]},
]
export default function ProductRec() {
  return (
  <div className='absolute top-[50%] left-5 flex items-start gap-10'>
   
    <button className='z-10 bg-white border-2 m-4 p-6  w-[20vw]'>
            <h1 className='text-black text-lg text-left font-bold'>Starting ₹349 | Bestselling headphones</h1>
          <div className=''>
            <img className='pt-2' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/GW/CC/Headphones_Desktop_Cat_Card_1x_1._SY304_CB575831742_.jpg" alt="product_img"/>
          </div>
          <p className='p-2 text-left text-xs text-blue-500'>see all offers</p>
    </button>
      
      {product.map((ele)=>{
        return<button className='z-10 bg-white border-2 m-4 p-4 w-[20vw]' id={ele.id}>
            <h1 className='text-black text-lg text-left font-bold'>{ele.Title}</h1>
            <div className='grid grid-cols-2 gap-2'>
            {ele.imglinks.map((img)=>{return<div className='pt-2'><img className='' src={img.link} alt="product_img"/><p className=' text-left text-xs'>{img.qoute}</p></div>})}
            </div>
            <p className='p-2 text-left text-xs text-blue-500'>see all offers</p>
            </button>
      })}

    <button className='z-10 bg-white border-2 m-4 p-6  w-[20vw]'>
            <h1 className='text-black text-lg text-left font-bold'>Up to 80% off | Laptops, smartwatches & headphones</h1>
          <div className=''>
            <img className='pt-2' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Scroll/Camera/Topdeal/n/Desktop_CC._SY304_CB575822413_.jpg" alt="product_img"/>
          </div>
          <p className='p-2 text-left text-xs text-blue-500'>see all offers</p>
    </button>

  </div>
  )
}
