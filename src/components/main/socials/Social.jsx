import React from 'react';
import './social.scss';


function Social(props) {
  return (
    <div className='Social'>
      <h2>I miei due account {props.socialName}:</h2>
      <section>
        <div className='socialContainer'>
          <a
            className='navLink'
            href={props.socialTrainingUrl}
            target='blank'
          >
            <img src={props.socialTrainingImg} alt='training' />
          </a>
        </div>

        <div className='socialContainer'>
          <a
            className='navLink'
            href={props.socialWellnessUrl}
            target='blank'
          >
            <img src={props.socialWellnessImg} alt='wellness' />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Social;
