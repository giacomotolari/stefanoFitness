import { NavLink } from 'react-router-dom';
import './wellnessNav.scss';

const WellnessNav = () => {
  return (
    <ul className='WellnessNav'>
      <NavLink
        className='wellnessnavList'
        to='/wellness'
        exact={true}
        activeClassName='selected'
      >
        <li>massaggi</li>
      </NavLink>

      <NavLink
        className='wellnessnavList'
        to='/wellness/appuntamenti'
        activeClassName='selected'
      >
        <li>appuntamenti</li>
      </NavLink>
    </ul>
  );
};

export default WellnessNav;
