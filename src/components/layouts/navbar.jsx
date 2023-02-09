import React from "react"
import { Link } from "react-router-dom"

import logo from '../../assets/images/logo.svg'
import iconMenu from '../../assets/images/icon-menu.svg'

import './navbar.css'



const Navbar = () => {

    return (

        <nav className="navbar">

            <Link to="/" >

                <img src={logo} alt="" />

            </Link>

            <ul className="menu">

                <li>

                    <Link to="/">Home</Link>

                </li>

                <li>

                    <Link to="/new">New</Link>

                </li>

                <li>

                    <Link to="/popular">Popular</Link>

                </li>

                <li>

                    <Link to="/trending">Trending</Link>

                </li>

                <li>

                    <Link to="/categories">Categories</Link>

                </li>

            </ul>
            <label htmlFor="" className="nav-icon">
                <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
            </label>
        </nav>

    )

}



export default Navbar