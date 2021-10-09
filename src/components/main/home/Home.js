import './home2.scss';
import React, { Link } from 'react-router-dom';
import video1 from './steEsibtítion.MOV';
import video2 from './IMG_2249.mov';
import facebook from '../../../assets/icons/facebook.png';
import instagram from '../../../assets/icons/instagram.png';
import HoverVideoPlayer from 'react-hover-video-player';

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
          <Link className='link-nav' to='/training'>
            <HoverVideoPlayer videoSrc={video1} className='videoBodySolution' />
          </Link>

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
          {/* <img src={ClickHere} alt='' className='clickHereIcon' /> */}
          <div className='textWrapper'>
            <Link className='link-nav' to='/welLness'>
              <h2 className='textTitle'>I MIEI TRATTAMENTI</h2>
            </Link>
          </div>

          {/* <video className='welnessBackground' src={video2} autoPlay='true' /> */}
          <Link className='link-nav' to='/welLness'>
            <HoverVideoPlayer
              videoSrc={video2}
              className='videoTrattamentoPsicofisico'
            />
          </Link>

          {/* FACEBOOK Psicofisico*/}
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
            {/* INSTAGRAM     https://www.instagram.com/trattamento_psicofisico/ */}

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
