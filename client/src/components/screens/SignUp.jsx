import React from 'react'
import { signUp, signInUser } from '../../services/auth'
<<<<<<< HEAD:client/src/components/screens/SignUp.jsx
import './signup.css'
=======
import './SignUp.css'
>>>>>>> jowel-branch:client/src/components/routes/SignUp.jsx

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

        const { history } = this.props
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
<<<<<<< HEAD:client/src/components/screens/SignUp.jsx
            return <button type="submit">Sign Up</button>
=======
            return <button className="signup" type="submit">Sign Up</button>
>>>>>>> jowel-branch:client/src/components/routes/SignUp.jsx
    }
    render() {
        const { firstName, lastName, email, password } = this.state
        return (
            <div className="signup-container">
                <div className="signup-form">
                   
                    <h3>Sign Up</h3>
                    <div className="input-form">
                    <form onSubmit={this.onSignup}>
                        <label>First Name </label>
                        <input
                            className="form-styling"
                            required
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
<<<<<<< HEAD:client/src/components/screens/SignUp.jsx
                        <label>Last Name </label>
=======
                        <label>Last Name </label> 
>>>>>>> jowel-branch:client/src/components/routes/SignUp.jsx
                        <input
                            className="form-styling"
                            required
                            type="text"
                            name="lastName"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />
<<<<<<< HEAD:client/src/components/screens/SignUp.jsx
                        <label>Email </label>
=======
                        <label>Email</label>
>>>>>>> jowel-branch:client/src/components/routes/SignUp.jsx
                        <input
                            className="form-styling"
                            required
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Enter Your Email"
                            onChange={this.handleChange}
                        />
<<<<<<< HEAD:client/src/components/screens/SignUp.jsx
                        <label>Password</label>
=======
                        <label>Password </label>
>>>>>>> jowel-branch:client/src/components/routes/SignUp.jsx
                        <input
                            className="form-styling"
                            required
                            type="text"
                            name="password"
                            value={password}
                            placeholder="Enter a Password"
                            onChange={this.handleChange}
                        />
                       
                        {this.renderError()}
                    </form>
<<<<<<< HEAD:client/src/components/screens/SignUp.jsx
                
=======
                    </div>
>>>>>>> jowel-branch:client/src/components/routes/SignUp.jsx
                </div>
            </div>
        )
    }
}

export default SignUp