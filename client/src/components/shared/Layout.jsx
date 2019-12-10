import React from 'react'
import Nav from './Nav'
import './Layout.css'

const Layout = (props) => {
    return(
    <div className="layout" >
         {props.children}
        <Nav />
       
    </div>
    )
}

export default Layout