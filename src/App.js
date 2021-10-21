import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import DataBoard from './components/DataBoard'

class App extends Component {
  render () {    
    return (      
      <div className="App">
        <Provider store={store}>          
          <DataBoard />
        </Provider>
      </div>  
    )
  }
}

export default App