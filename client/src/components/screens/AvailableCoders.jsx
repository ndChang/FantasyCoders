import React from 'react'
import {NavLink} from 'react-router-dom'

class AvailableCoders extends React.Component{
    constructor() {
        super ()
        this.state = ''
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