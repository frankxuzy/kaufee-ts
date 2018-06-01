import * as React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import History from './History'
import Registor from './Registor'
import Login from './Login'
const App = () => {
  return (
    <Router>
      <div className='app container'>
        <AppPaths />
      </div>
    </Router>
  )
}

const AppPaths = () => {
  return (
    <div className="app-paths">
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Home} />      
      <Route path='/history' component={History} />
      <Route path='/registor' component={Registor} />
      <Route path='/login' component={Login} />
  </div>
  )

}
export default App
