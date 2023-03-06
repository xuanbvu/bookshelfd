import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';
import './Layout.css';

const Layout = () => {
  const navigate = useNavigate();

  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const searchInput = document.getElementById('navlink-search-input');
    const searchInputIcon = document.getElementById('navlink-search-input-icon');
    const log = document.getElementById('navlink-log');

    if (searching) {
      searchInput.style.display = 'block';
      searchInputIcon.style.display = 'block';
      log.style.display = 'none';
    } else {
      searchInput.style.display = 'none';
      searchInputIcon.style.display = 'none';
      log.style.display = 'block';
      // TODO: clear searchTerm after exiting
      // setSearchTerm('');
    }
  }, [searching])

  const clickSearch = () => {
    const newSearchTerm = searchTerm.split(' ').join('+');
    navigate(`/search/${newSearchTerm}`)
  }

  return (
    <div>
      <div className='main-navbar-wrapper'>
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
              <NavLink
                to='/bookshelf'
                className={({ isActive }) => isActive ? 'active-navlink' : null}
              >
                Bookshelf
              </NavLink>
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
              <NavLink
                to='/books'
                className={({ isActive }) => isActive ? 'active-navlink' : null}
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/reading'
                className={({ isActive }) => isActive ? 'active-navlink' : null}
              >
                Reading
              </NavLink>
            </li>
            <li>
              <button className='navlink-search-icon' onClick={() => setSearching(!searching)}>
                <FontAwesomeIcon icon={searching ? faX : faMagnifyingGlass} />
              </button>
            </li>
              <input 
                id='navlink-search-input'
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") clickSearch()
                }}
              />
              <button id='navlink-search-input-icon' onClick={clickSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            <li>
              <button id='navlink-log'>+ Log</button>
              {/* TODO: code functionality for logging to diary */}
            </li>
          </ul>
        </div>
      </div>
      <div className='main-content'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout