import React, { Route } from 'react-router-dom';
import './wellness.scss';
import WellnessNav from './wellnessNav/WellnessNav';
import Massaggi from './massaggi/Massaggi';

const Wellness = () => {
  return (
    <div className='Wellness'>
      <WellnessNav />
      <section className='wellnessBody'>
        <Route exact path='/wellness'>
          <Massaggi />
        </Route>
      </section>
    </div>
  );
};

export default Wellness;
