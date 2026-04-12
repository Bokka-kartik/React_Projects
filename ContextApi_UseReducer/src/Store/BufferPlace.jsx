import React from 'react'
import { useReducer } from 'react'
import { DisplayReducer, initialState } from './DisplayReducer'
import { store } from './store'

const BufferPlace = ({children}) => {
    const [state,dispatch]=useReducer(DisplayReducer,initialState)
  return (
    <store.Provider value={{state,dispatch}}>
        {children}
    </store.Provider>
  )
}

export default BufferPlace

