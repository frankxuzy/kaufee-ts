import * as React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component<{}, any> {
  constructor (props: {}) {
    super (props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e: {target: {name: string, value: string}}) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  attemptUserLogin () {
    if(this.state.username && this.state.password) {
      
    }
  }

  render() {
    return (
      <div className='login'>
        <h2>Login</h2>
        <input type="text" name='username' placeholder='User Name'/>
        <input type="text" name='password' placeholder='User Password'/>
        <button>Login</button>
      </div>
    )
  }
}

export default Login
