
import React from 'react'
import FunCompOne from './FunCompOne'
import FunCompTwo from './FunCompTwo'
import {useState} from 'react'

const ToggleFunc = () => {

    const [funcOne,setfunOne]=userState(false);
    const [funcTwo,setfunTwo]=userState(false);



  return (
    <div>
      <button onClick={()=>setfuncOne(!funcOne)}>first Functional Compoent </button>
      <button onClick={()=>setfuncTwo(!funcTwo)}>second Functional Compoent </button>
    </div>
  )
}

export default ToggleFunc
