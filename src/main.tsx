import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Register from './Register'
import 'flowbite' 

//const [isActive, setIsActive] = useState(true)

function isActive2(){
  const element = (false) ? <App /> : <Register />
  return ReactDOM.render(element,document.getElementById("root"))
}

isActive2()