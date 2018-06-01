import * as React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  constructor (props: {}) {
    super (props)
  }

  render() {
    return (
      <div className="navbar">
        <Link to='/'><button>Home</button></Link> 
        <Link to='/history'><button>History</button></Link> 
        <Link to='/registor'><button>Registor</button></Link> 
        <Link to='/login'><button>Login</button></Link> 
      </div>
    )
  }
}

export default Navbar
