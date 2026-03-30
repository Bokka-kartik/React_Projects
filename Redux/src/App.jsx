import React from 'react'
import { Provider } from 'react-redux'
import {store} from "./Store/Store"
import Counter  from './Components/Counter'

//must wrap the App component with provider to pass the store it self which can be shared among other sub-components 

const App = () => {


  return (<Provider store={store}>
    <Counter/>
  </Provider>
  )
}
export default App;