import { useState } from 'react';
import './burgerMenu.scss';
import { NavLink } from 'react-router-dom';
// import facebook from '../../assets/icons/facebook.png';
// import instagram from '../../assets/icons/instagram.png';
// import youtube from '../../assets/icons/youtube.png';
// import whatzapp from '../../assets/icons/whatzapp.png';
// import mail from '../../assets/icons/mail.png';
// import telefono from '../../assets/icons/telefono.png';

function BurgerMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <>
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
    </>
  );
}

export default BurgerMenu;
