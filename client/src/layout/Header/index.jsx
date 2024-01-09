import React from 'react'
import "./styles.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="left">
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/startup2/img/logo.png.webp" alt="logo" />
            </div>
        </div>
        <div className="right">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add">Add New</Link>
                </li>
                <li>
                    <Link to="#">Portfolio</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header