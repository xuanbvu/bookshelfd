import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';
import './Layout.css';

const Layout = () => {
  return (
    <div>
      <div className='main-navbar'>
        <div className='navbar-brand'>
          <img src={logo} />
          <h1>Bookshelfd</h1>
        </div>
        <ul className='navbar-links'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'active-navlink' : null}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/diary'
              className={({ isActive }) => isActive ? 'active-navlink' : null}
            >
              Diary
            </NavLink>
          </li>
          <li>
          <li>
            <NavLink
              to='/bookshelf'
              className={({ isActive }) => isActive ? 'active-navlink' : null}
            >
              Bookshelf
            </NavLink>
          </li>
          </li>
          <li>
          <li>
            <NavLink
              to='/books'
              className={({ isActive }) => isActive ? 'active-navlink' : null}
            >
              Books
            </NavLink>
          </li>
          </li>
          <li>
            <NavLink
              to='/readlist'
              className={({ isActive }) => isActive ? 'active-navlink' : null}
            >
              Readlist
            </NavLink>
          </li>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </li>
          <li>
            <button className='navlink-log'>+ Log</button>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout