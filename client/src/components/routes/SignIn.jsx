import React from 'react'
import { signInUser } from '../../services/auth'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })
    }
    onSignIn = event => {
        event.preventDefault()
        const { history, setUser } = this.props

        signInUser(this.state)
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    isError: true,
                    errorMsg: "Invalid",
                    email: '',
                    password: ''

                })
            })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <button type="submit">Sign</button>
        }

    }

    render() {

        const { email, password } = this.state

        return (
            <div className="signin-container">
                <div className="signin-form">
                    <h3>Sign In</h3>
                    <form onSubmit={this.onSignIn}>
                        <label>Email</label>
                        <input
                            required
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                            required
                            name="password"
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        {this.renderError()}
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn