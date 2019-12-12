import { Component } from 'react'
import { signOut } from '../../services/auth'

class SignOut extends Component {
  async componentDidMount() {
    await localStorage.clear()
    this.props.history.push('/sign-in')
    // const { history, clearUser, user } = this.props
    // signOut(user)
    //   .then(() => clearUser())
    //   .finally(() => history.push('/'))
  }

  render() {
    return ''
  }
}

export default SignOut