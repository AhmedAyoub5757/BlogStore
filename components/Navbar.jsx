import React from 'react'
import Link from 'next/link'
// import "../globals.css" // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-logo">
          <Link href="/">MyPortfolio</Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          {/* <li><Link href="/contact">Contact</Link></li> */}
          <li><Link href="/store">Store</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="navbar-menu">
          <button className="menu-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
