import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">

      <ul>

        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/today'>
         <li>Today</li>
        </Link>
        <Link to='/yesterday'>
         <li>Yesterday</li>
        </Link>
        
        <Link to='/news'>
         <li>News</li>
        </Link>
        
      </ul>
    </nav>
  )
}

export default Nav
