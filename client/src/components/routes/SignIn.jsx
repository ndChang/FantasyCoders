import React from 'react'

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
            isError:false,
            errorMsg: ''
        })
    }

    onSignIn = event => {
        event.preventDefault()
        const { history, setUser} = this.props
        signInUser(this.state).then(res => setUser(res.user))
    }

    render() {
        return (
            <h1>Sign in</h1>
        )
    }
}

export default SignIn