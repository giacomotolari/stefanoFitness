import React from 'react';
import './facebook.scss';
import facebookTraining from '../../../assets/images/facebookTraining.jpg';
import facebookWellness from '../../../assets/images/facebookWellness.jpg';

function Facebook() {
  return (
    <div className='Facebook'>
      <h2>Dispongo di due account Facebook:</h2>
      <section>
        <div className='facebookContainers'>
          {/* <a
            className='navLink'
            href='https://www.facebook.com/calisthenicscarbonianlf'
            target='blank'
          >
            <div className='facebookTextWrapper'>
              <p>TRAINING</p>
            </div>
          </a> */}
          <a
            className='navLink'
            href='https://www.facebook.com/calisthenicscarbonianlf'
            target='blank'
          >
            <img src={facebookTraining} alt='facebookTraining' />
          </a>
        </div>

        <div className='facebookContainers'>
          {/* <a
            className='navLink'
            href='https://www.facebook.com/stemanca'
            target='blank'
          >
            <div className='facebookTextWrapper'>
              <p>WELLNESS</p>
            </div>
          </a> */}
          <a
            className='navLink'
            href='https://www.facebook.com/stemanca'
            target='blank'
          >
            <img src={facebookWellness} alt='facebookWellness' />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Facebook;
