import React from 'react'
import './footer.css'

import logo from '../../images/nav_logo.png'

const Footer = () => {
  let date = new Date()
  let currentYear = date.getFullYear()
  return (
    <div className='container-fluid footer-fluid'>
      <div className='section footer-section'>
        <div className='footer-8848-logo'>
          <img src={logo} alt="8848-logo" className='footer-8848-logo-img' />
        </div>
        <div className='footer-heading'>
          <div className='social-medias'>
            <a href="https://www.facebook.com/8848" alt="facebook">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://www.instagram.com/8848.nyc/" alt="instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className='address-info'>
          <p>7532 BROADWAY FL 2</p>
          <p>ELMHURST, NY 11373</p>
          <a href="tel:929-424-300" className='eight-8848--footer-phone'>929-424-3001</a>
        </div>
        <div className='footer-copyright'>
          <p>&nbsp;Copyright © {currentYear} 8848. All rights reserved.{"  "} </p>
          <a href="https://www.bibashkc.com" target="_blank"><p>www.bibashkc.com </p></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
