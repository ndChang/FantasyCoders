import React from 'react'
import { NavLink } from 'react-router-dom'

class TeamRoster extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="teamroster-container">
                <div className="teamroster">
                    <h1>TEAM ROSTER</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/availablecoders'>Available Coders</NavLink>
                </div>
                <div className="team-logo">
                    <img src="https://cms-assets.tutsplus.com/uploads/users/151/posts/32220/image/FB10.jpg" />
                </div>
            </div>
        )
    }
}

export default TeamRoster