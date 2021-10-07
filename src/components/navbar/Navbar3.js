/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './navbar2.scss';
import { NavLink } from 'react-router-dom';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import youtube from '../../assets/icons/youtube.png';
import whatzapp from '../../assets/icons/whatzapp.png';
import mail from '../../assets/icons/mail.png';
import telefono from '../../assets/icons/telefono.png';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div className='Navbar'>
      <ul className='navBar'>
        <li>
          <NavLink
            className='link-nav'
            to='/'
            exact={true}
            activeClassName='selected'
          >
            <p>HOME</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className='link-nav'
            to='/training'
            activeClassName='selected'
          >
            <p>TRAINING</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className='link-nav'
            to='/wellness'
            activeClassName='selected'
          >
            <p>WELLNESS</p>
          </NavLink>
        </li>

        <li>
          <NavLink className='link-nav' to='/about' activeClassName='selected'>
            <p>ABOUT</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className='link-nav'
            to='/contact'
            activeClassName='selected'
          >
            <p>CONTACT</p>
          </NavLink>
        </li>
        <div className='iconsContainer'>
          <div className='socialsContainer'>
            <NavLink to='/facebook' activeClassName='selectedSocials'>
              <img
                className='contactIcon'
                id='facebook'
                src={facebook}
                alt='facebook'
              />
            </NavLink>
            <a
              href='https://it-it.facebook.com/SalumificioArtigianaleMei/'
              target='blank'
            >
              <img
                className='contactIcon'
                id='youtube'
                src={youtube}
                alt='youtube'
              />
            </a>
            <NavLink to='/instagram' activeClassName='selectedSocials'>
              <img
                className='contactIcon'
                id='instagram'
                src={instagram}
                alt='instagram'
              />
            </NavLink>
          </div>
          <div className='contactsContainer'>
            <a
              className='navLink'
              href='https://wa.me/+393488733334'
              target='blank'
            >
              <img
                className='contactIcon'
                id='whatzapp'
                src={whatzapp}
                alt='whatzapp'
              />
            </a>
            <a
              className='navLink'
              href='mailto:sjmanca@gmail.com'
              target='blank'
            >
              <img className='contactIcon' id='mail' src={mail} alt='mail' />
            </a>
            <a className='navLink' href='tel:+393488733334' target='blank'>
              <img
                className='contactIcon'
                id='telefono'
                src={telefono}
                alt='telefono'
              />
            </a>
          </div>
        </div>
      </ul>
      <div id='menuToggle'>
        <input id='menuInput' type='checkbox' onClick={handleToggle} />

        <span></span>
        <span></span>
        <span></span>

        {/* <button id='menuInput' onClick={handleToggle}>{navbarOpen ? "X" : "MENU"}</button> */}
        {navbarOpen && (
          <ul id='menu'>
            {/* // <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}> */}
            <li>
              <NavLink className='link-nav' to='/'>
                <p onClick={handleToggle}>HOME</p>
              </NavLink>
            </li>

            <li>
              <NavLink className='link-nav' to='/news'>
                <p onClick={handleToggle}>NEWS</p>
              </NavLink>
            </li>
            <li>
              <NavLink className='link-nav' to='/training'>
                <p onClick={handleToggle}>TRAINING</p>
              </NavLink>
            </li>
            <li>
              <NavLink className='link-nav' to='/welLness'>
                <p onClick={handleToggle}>WELLNESS</p>
              </NavLink>
            </li>
            <li>
              <NavLink className='link-nav' to='/about'>
                <p onClick={handleToggle}>ABOUT</p>
              </NavLink>
            </li>
            <li>
              <NavLink className='link-nav' to='/contact'>
                <p onClick={handleToggle}>CONTACT</p>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
