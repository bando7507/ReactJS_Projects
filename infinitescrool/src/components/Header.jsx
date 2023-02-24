import React from 'react'
import Logo from '../logo.svg'

export default function Header() {
  return (
    <header>
        <div className="logo">
            <img 
            style={{
                width: "100px"
            }}
            src={Logo} alt="" />
        </div>

        <ul className="menu">

        </ul>
    </header>
  )
}
