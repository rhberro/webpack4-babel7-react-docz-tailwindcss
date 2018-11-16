import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss'

function Header () {
  return (
    <header className='header'>
      <h1 className='header__title'>thebuddy</h1>
      <ul className='header__list'>
        <li className='header__item'>
          <NavLink className='header__anchor' activeClassName='header__anchor--active' exact to='/'>
            Início
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink className='header__anchor' activeClassName='header__anchor--active' exact to='/signin'>
            Login
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink className='header__anchor' activeClassName='header__anchor--active' exact to='/signup'>
            Register
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
