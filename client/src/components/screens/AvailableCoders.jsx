import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


class AvailableCoders extends React.Component{
    constructor() {
        super ()
        this.state = {
            coders: []
        }
    }

    render() {
        return (
        <div className="availablecoders">
            <h1>Available Coders</h1>
            <NavLink to= '/'>Home</NavLink>
            </div>
        )

    }
}

export default AvailableCoders