import './home.scss';
import React, { Link } from 'react-router-dom';
import facebook from '../../../assets/icons/facebook.png';
import instagram from '../../../assets/icons/instagram.png';
import ReactPlayer from 'react-player';

function Home() {
  return (
    <div className='Home'>
      <section>
        <div className='trainerWrapper'>
          <div className='textWrapper'>
            <Link className='link-nav' to='/training'>
              <h2 className='textTitle'>ALLENATI CON STE</h2>
            </Link>
          </div>
          <ReactPlayer
            muted
            playing={true}
            url='https://www.youtube.com/watch?v=KrbQhXfrkmE'
            className='video'
          />
          <div className='instFbWrapper'>
            <a
              className='navLink'
              href='https://www.facebook.com/calisthenicscarbonianlf'
              target='blank'
            >
              <img
                className='contactIconHome'
                id='facebookHome'
                src={facebook}
                alt='facebook'
              />
            </a>
            <a
              href='https://www.instagram.com/stemanca_bodysolution/'
              target='blank'
            >
              <img
                className='contactIconHome'
                id='instagramHOme'
                src={instagram}
                alt='instagram'
              />

              <p>stemanca_bodysolution</p>
            </a>
          </div>
        </div>
        <div className='welnessWrapper'>
          <div className='textWrapper'>
            <Link className='link-nav' to='/welLness'>
              <h2 className='textTitle'>I MIEI TRATTAMENTI</h2>
            </Link>
          </div>
          <ReactPlayer
            muted
            playing={true}
            url='https://www.youtube.com/watch?v=i4AeZpPkp-I'
            autoPlay={true}
            className='video'
          />
          <div className='instFbWrapper'>
            <a
              className='navLink'
              href='https://www.facebook.com/stemanca'
              target='blank'
            >
              <img
                className='contactIconHome'
                id='facebookHome'
                src={facebook}
                alt='facebook'
              />
            </a>

            <a
              className='navLink'
              href='https://www.instagram.com/trattamento_psicofisico'
              target='blank'
            >
              <img
                className='contactIconHome'
                id='instagramHome'
                src={instagram}
                alt='instagram'
              />
              <p>trattamento_psicofisico</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
