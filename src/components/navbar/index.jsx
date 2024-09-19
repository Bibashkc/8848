import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

import logo from '../../images/nav_logo.png'

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.navbar-toggler')
    const navbar = document.querySelector('#navbarNav')
    if (menu) {
      menu.classList.add('collapsed')
      navbar?.classList.remove('show')
    }
    return
  }
  return (
    <nav className='navbar fixed-top'>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <i className="fas fa-bars" style={{ color: "#fff", fontSize: "25px" }}></i>
      </button>
      <Link to="/" className='navbar-brand'>
        <img className="d-inline-block align-top nav-img" src={logo} alt="logo" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* <li className="nav-item active" >
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li> */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Drink
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/drink-menu/all" onClick={toggleMenu}>All</Link>
              <Link className="dropdown-item" to="/drink-menu/cocktail" onClick={toggleMenu}>Cocktails</Link>
              <Link className="dropdown-item" to="/drink-menu/singature-cocktail" onClick={toggleMenu}>Singature Cocktails</Link>
              <Link className="dropdown-item" to="/drink-menu/beer" onClick={toggleMenu}>Beers</Link>
              <Link className="dropdown-item" to="/drink-menu/draftBeer" onClick={toggleMenu}>Draft Beers</Link>
              <Link className="dropdown-item" to="/drink-menu/wine" onClick={toggleMenu}>Wines</Link>
              <Link className='dropdown-item' to="/drink-menu/guest-fav" onClick={toggleMenu}>GUEST FAVORITES</Link>
            </div>
          </li>
          <li className="nav-item" >
            <Link to="/food-menu/8848-food" className="nav-link" onClick={toggleMenu}>FOOD</Link>
          </li>
          <li className="nav-item active social-media-nav" >
            <a href="https://www.facebook.com/8848" alt="facebook" onClick={toggleMenu} target="_blank">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li className="nav-item active social-media-nav insta-margin-left" >
            <a href="https://www.instagram.com/8848.nyc/" alt="instagram" onClick={toggleMenu} target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
