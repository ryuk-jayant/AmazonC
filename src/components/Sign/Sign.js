import { createContext, useState} from 'react'
export const SignContext = createContext()
//cart context provider
export const SignProvider = ({ children }) => {
    const [UserName,setUserName]=useState(null)
    const [Pass,setPass]=useState()
      return (
        <SignContext.Provider
          value={{
           UserName,
           setUserName,
           Pass,
           setPass
          }}
        >
          {children}
        </SignContext.Provider>
      );
      
}

