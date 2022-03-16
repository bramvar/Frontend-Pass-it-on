import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Register from './Register'
import Decide from './Decide'
//import 'flowbite' 



const isActive2 =()=>{
 // const [isActive, setIsActive] = React.useState(true)

  const elem = (true) ? "<App />" :"<Register />"
  
  return (
    <div>
        {elem}
    </div>
  )
}


ReactDOM.render(
    <React.StrictMode>
        <Decide />
      
    </React.StrictMode>,

    document.getElementById("root"))

    