import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Footer from './footer'
import Navbar from './navbar'
import Food from './food'
import Drink from './drink'

const NavRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/food-menu/:id" element={<Food />} />
        <Route exact path="/drink-menu/:id" element={<Drink />} />
        <Route path="*" element={<Drink />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default NavRoutes
