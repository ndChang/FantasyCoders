import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './AvailableCoders.css'

class AvailableCoders extends React.Component {
    constructor() {
        super()
        this.state = {
            coders: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`http://localhost:3000/api/coders`)
            this.setState({ coders: response.data.coders },  ()=> console.log(this.state.coders))
        } catch (err) {
            console.error(err)
        }
    }



    render() {
        return (
            <div className="availablecoders">
                <h1>Available Coders</h1>
                <NavLink to='/'>Home</NavLink>
                <div className="coder-card">
                    <h2>image</h2>
                    <h1>fullname</h1>
                    <h2>expertise</h2>
                </div>
            </div>
        )

    }
}

export default AvailableCoders