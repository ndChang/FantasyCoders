import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


class AvailableCoders extends React.Component {
    constructor() {
        super()
        this.state = {
            coders: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3000/api/items`)
            this.setState({ items: response.data.items })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div className="availablecoders">
                <h1>Available Coders</h1>
                <NavLink to='/'>Home</NavLink>
            </div>
        )

    }
}

export default AvailableCoders