import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            {/* <NavLink to= '/'>Home</NavLink>
            <NavLink to ='/teamroster'>Team Roster</NavLink>
            <NavLink to='/availablecoders'>Available Coders</NavLink> */}

            <NavLink to='/sign-up'>Sign Up</NavLink>
            <NavLink to='/sign-in'>Sign In</NavLink>

        </nav>
    )
}

export default Nav