import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="nav">
      <div className="navContainer">
        <NavLink className="signUp" to='/sign-up'>Sign Up</NavLink>
        <NavLink className="signIn" to='/sign-in'>Sign In</NavLink>
      </div>
    </div>
  )
}
export default Home 