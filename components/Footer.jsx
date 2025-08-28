import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / About */}
        <div className="footer-brand">
          <h2>Ahmed Ayoub</h2>
          <p>
            Full-stack developer passionate about building modern web applications 
            with Next.js, React, and custom CSS.
          </p>
        </div>

        {/* Quick Links (Optional — uncomment if you want it visible) */}
        {/* <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/store">Store</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div> */}

        {/* Social / Contact */}
        <div className="footer-social">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="mailto:ahmed@example.com">Email</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        © 2025 | All rights reserved | Ahmed Ayoub
      </div>
    </footer>
  )
}

export default Footer
