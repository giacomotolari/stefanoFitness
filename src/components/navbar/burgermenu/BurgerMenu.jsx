import { useContext } from 'react';
import { Context } from '../../../App';
import './burgerMenu.scss';
import { NavLink } from 'react-router-dom';
import facebook from '../../../assets/icons/facebook.png';
import instagram from '../../../assets/icons/instagram.png';
import youtube from '../../../assets/icons/youtube.png';
import whatzapp from '../../../assets/icons/whatzapp.png';
import mail from '../../../assets/icons/mail.png';
import telefono from '../../../assets/icons/telefono.png';

function BurgerMenu() {
  const { menuToogle, setMenuToogle } = useContext(Context);

  const handleToggle = () => {
    setMenuToogle((prev) => !prev);
  };

  return (
    <>
      <div id='menuToggle'>
        <input id='menuInput' onClick={handleToggle} />

        <span
          className={`${
            menuToogle ? 'spansOpen firstSpanOpen' : 'firstSpanClose'
          }`}
        ></span>
        <span
          className={`${
            menuToogle ? 'spansOpen secondSpanOpen' : 'secondSpanClose'
          }`}
        ></span>
        <span
          className={`${
            menuToogle ? 'spansOpen thirdSpanOpen' : 'thirdSpanClose'
          }`}
        ></span>

        {menuToogle && (
          <ul id='menu'>
            <li>
              <NavLink
                exact={true}
                activeClassName='selected'
                className='link-nav'
                to='/'
              >
                <p onClick={handleToggle}>HOME</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName='selected'
                className='link-nav'
                to='/news'
              >
                <p onClick={handleToggle}>NEWS</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='selected'
                className='link-nav'
                to='/training'
              >
                <p onClick={handleToggle}>TRAINING</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='selected'
                className='link-nav'
                to='/welLness'
              >
                <p onClick={handleToggle}>WELLNESS</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='selected'
                className='link-nav'
                to='/about'
              >
                <p onClick={handleToggle}>ABOUT</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='selected'
                className='link-nav'
                to='/contact'
              >
                <p onClick={handleToggle}>CONTACT</p>
              </NavLink>
            </li>
            <div className='iconsContainer'>
              <div className='socialsContainer'>
                <NavLink to='/facebook'>
                  <img
                    onClick={handleToggle}
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
                <NavLink to='/instagram'>
                  <img
                    onClick={handleToggle}
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
                  <img
                    className='contactIcon'
                    id='mail'
                    src={mail}
                    alt='mail'
                  />
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
        )}
      </div>
    </>
  );
}

export default BurgerMenu;
