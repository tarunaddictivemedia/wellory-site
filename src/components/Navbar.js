import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <div class="sec-row">
        <div className="sec-md-col-25 logoclmn">
          <div className="logo-grp">
            <Link to="/"><img src="../logo.png" alt="Logo"/></Link>
          </div>
        </div>
        <div class="sec-md-col-75 navclmn">
          <div className="navigation-grp">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
