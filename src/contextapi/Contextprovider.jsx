import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const responsecontext=createContext()
function Contextprovider({children}) {
    const[response,setresponse]=useState("")
  return (
    <>
    <responsecontext.Provider value={{response,setresponse}}>
        {children}
    </responsecontext.Provider>
    

    </>
  )
}

export default Contextprovider