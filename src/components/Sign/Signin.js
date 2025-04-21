import React,{useContext,useEffect, useState} from 'react'
import { SignContext } from './Sign'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import Navbar from '../navbar';
import Itembar from '../itembar';
export default function Signin() {
 
  const[login,setlogin]=useState([])
  const[flag,setflag]=useState(false)
  const signme=useGoogleLogin({
    onSuccess: (codeResponse) => setlogin(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  })
  const navigate = useNavigate();
    const { UserName,
        setUserName,
       }=useContext(SignContext)

       useEffect(
        () => {
            if (login) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${login.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${login.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setlogin(res.data);
                        console.log(res.data)
                        setUserName(res.data.name)
                        setflag(true)
                        navigate("/Home")
          
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ login ]
    );

  return (
    <div>
      <Navbar/>
      <Itembar/>
    <div className='flex justify-center mt-10 '>
        <div className="border-2 p-4 grid grid-cols-1 items-center gap-5 w-[30vw]">
            <p className='m-2 text-3xl text-left font-semibold'>Sign In</p>
            <input className='object-contain p-2 m-4' placeholder='Enter UserName'/>
            <input className="p-2 m-4" placeholder='Enter Password' type='Password'/>
            <div className='flex  items-center justify-around'>
            <button className='p-4 rounded-lg m-4 bg-[#ffd814] w-[10vw]'>Sign In</button>
            <button className='p-4 rounded-lg m-4 bg-[#ffd814] w-[10vw]' onClick={()=>{signme()}}>Google</button>
            </div>
            {UserName?<p>username:{UserName}</p>:<p>not logged in{UserName}</p>}
        </div>
    </div>
    </div>
  )
}
