import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to= '/'>Home</NavLink>
            <NavLink to ='/teamroster'>Team Roster</NavLink>
            <NavLink to='/availablecoders'>Available Coders</NavLink>
            
        </nav>
    )
}

export default Nav