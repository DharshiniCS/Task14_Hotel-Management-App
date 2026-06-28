import { NavLink } from "react-router-dom"
import "../css/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">
        🍽️ Royal Spice
    </div>
    <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </ul>
    </nav>
    
  )
}
