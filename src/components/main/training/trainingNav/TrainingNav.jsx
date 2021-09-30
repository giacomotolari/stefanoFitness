import { NavLink } from 'react-router-dom';
import './trainingNav.scss';

const TrainingNav = () => {
  return (
    <ul className='TrainingNav'>
      <NavLink
        className='trainingnavList'
        to='/training'
        exact={true}
        activeClassName='selected'
      >
        <li>allenamenti</li>
      </NavLink>

      <NavLink
        className='trainingnavList'
        to='/training/tabelle'
        activeClassName='selected'
      >
        <li>tabelle</li>
      </NavLink>

      <NavLink
        className='trainingnavList'
        to='/training/exercise'
        activeClassName='selected'
      >
        <li>esercizi</li>
      </NavLink>

      <NavLink
        className='trainingnavList'
        to='/training/appuntamenti'
        activeClassName='selected'
      >
        <li>appuntamenti</li>
      </NavLink>
      {/* 
      <Link className='trainingnavList' to='/luoghi'>
        <li>luoghi</li>
      </Link>

      <Link className='trainingnavList' to='/prodotti'>
        <li>prodotti</li>
      </Link> */}
    </ul>
  );
};

export default TrainingNav;
