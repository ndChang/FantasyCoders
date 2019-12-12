import React from 'react'
import { NavLink } from 'react-router-dom'
import './TeamRoster.css'

class TeamRoster extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="teamroster-container">
                <div className="teamroster">
                    <h1>TEAM ROSTER</h1>
                    <div className="rosterlinks">
                        <NavLink className="home" to='/'>Home</NavLink>
                        <NavLink className="availablecoders" to='/availablecoders'>Available Coders</NavLink>
                    </div>
                    <hr></hr>
                </div>
                <div className="rosterlogo">
                    <div className="teamlogo">
                        <p>Team logo</p>
                    </div>
                    <div className="teamName">
                        <p>TEAM NAME:</p>
                        <p>TEAM OWNER:</p>
                    </div>
                </div>
                {/* <div className="team-logo">
                    <img src="https://cms-assets.tutsplus.com/uploads/users/151/posts/32220/image/FB10.jpg" />
                </div> */}
            </div>
        )
    }
}

export default TeamRoster