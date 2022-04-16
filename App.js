import React from 'react'
import { Provider } from 'react-redux'
import MainNav from './src/navigation'
import store from './src/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  )
}

export default App;