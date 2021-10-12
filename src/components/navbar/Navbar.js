/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.scss';

import { NavLink } from 'react-router-dom';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import youtube from '../../assets/icons/youtube.png';
import whatzapp from '../../assets/icons/whatzapp.png';
import mail from '../../assets/icons/mail.png';
import telefono from '../../assets/icons/telefono.png';

function Navbar() {
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
              href='https://www.youtube.com/channel/UC_eNHu_DFN4uxGsu_BP-AfA'
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
    </div>
  );
}

export default Navbar;
