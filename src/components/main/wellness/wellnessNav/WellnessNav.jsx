import { Link } from 'react-router-dom';
import './wellnessNav.scss';

const WellnessNav = () => {
  return (
    <ul className='WellnessNav'>
      <Link className='wellnessnavList' to='/'>
        <li>massaggi</li>
      </Link>

      <Link className='wellnessnavList' to='/appuntamenti'>
        <li>appuntamenti</li>
      </Link>
      
      {/* <Link className='wellnessnavList' to='/prezzi'>
        <li>prezzi</li>
      </Link> */}
      {/* <Link className='wellnessnavList' to='/luoghi'>
        <li>luoghi</li>
      </Link> */}
    </ul>
  );
};

export default WellnessNav;
