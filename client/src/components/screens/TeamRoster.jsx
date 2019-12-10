import React from 'react'
import {NavLink} from 'react-router-dom'

class TeamRoster extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
        <div className="teamroster">
            <h1>TEAM ROSTER</h1>
            <NavLink to= '/'>Home</NavLink>
            <NavLink to='/availablecoders'>Available Coders</NavLink>
            </div>
        )
    }
}

export default TeamRoster