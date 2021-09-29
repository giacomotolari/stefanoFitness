import React from 'react';
import './instagram.scss';
import instagramTraining from '../../../assets/images/instagramTraining.png';
import instagramWellness from '../../../assets/images/instagramWellness.jpg';

function Instagram() {
  return (
    <div className='Instagram'>
      <h2>Dispongo di due account Instagram:</h2>
      <section>
        <div className='instagramContainers'>
          {/* <a
            className='navLink'
            href='https://www.instagram.com/calisthenicscarbonianlf'
            target='blank'
          >
            <div className='instagramTextWrapper'>
              <p>TRAINING</p>
            </div>
          </a> */}
          <a
            className='navLink'
            href='https://www.instagram.com/stemanca_bodysolution/'
            target='blank'
          >
            <img src={instagramTraining} alt='instagramTraining' />
          </a>
        </div>

        <div className='instagramContainers'>
          {/* <a
            className='navLink'
            href='https://www.instagram.com/stemanca'
            target='blank'
          >
            <div className='instagramTextWrapper'>
              <p>WELLNESS</p>
            </div>
          </a> */}
          <a
            className='navLink'
            href='https://www.instagram.com/trattamento_psicofisico'
            target='blank'
          >
            <img src={instagramWellness} alt='instagramWellness' />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Instagram;
