import React from 'react'
import { useContext } from 'react'
import { store } from '../Store/store'

const Display = () => {

  const {state,dispatch}=useContext(store)
  return (
    <div>
      <h1>{state.disp}</h1>  
      <label htmlFor='id'>Enter something:</label>
      <input onChange={(e)=>dispatch({type:"add",payload:e.target.value})}/>
    </div>
  )
}

export default Display
