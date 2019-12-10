import React from 'react'
import { signUp, signInUser } from '../../services/auth'


class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }
    handleChange = event =>
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''

        })

    onSignup = event => {
        event.preventDefault()

        const { history, } = this.props
        signUp(this.state)
            .then(() => signInUser(this.state))
            // .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    isError: true,
                    errorMsg: 'DETAILS INVALID'
                })
            }) 
          
    }

    renderError() {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else
            return <button type="submit">Sign Up</button>
    }
    render() {
        const { firstName, lastName, email, password } = this.state
        return (
            <div className="signup-container">
                <div className="signup-form">
                   
                    <h3>Sign Up</h3>
                    <form onSubmit={this.onSignup}>
                        <label>First Name </label>
                        <input
                            required
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                        <label>Last Name </label>
                        <input
                            required
                            type="text"
                            name="lastName"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
                        <label>Email </label>
                        <input
                            required
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Enter Your Email"
                            onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                            required
                            type="text"
                            name="password"
                            value={password}
                            placeholder="Enter a Password"
                            onChange={this.handleChange}
                        />
                       
                        {this.renderError()}
                    </form>
                
                </div>
            </div>
        )
    }
}

export default SignUp