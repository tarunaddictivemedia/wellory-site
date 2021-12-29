import React from 'react'
import Navbar from './navbar'
import '../styles/grid.css'
import '../styles/global.css'
import '../styles/responsive.css'
export default function Layout({ children }) {
  return (
    <div className="pagelayout">
      <header className="site-header">
        <div class="container">
          <Navbar />
        </div>
      </header>
      <div className="pagecontent">{children}</div>
    </div>
  )
}
