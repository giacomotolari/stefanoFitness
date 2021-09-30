import React,{ Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './wellness.scss';
import WellnessNav from './wellnessNav/WellnessNav';
import Massaggi from './massaggi/Massaggi';

const Wellness = () => {
  return (
    <Router>
      <div className='Wellness'>
        <WellnessNav />
        <section className='wellnessBody'>
          <Switch>
            <Route path='/'>
              <Massaggi />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
};

export default Wellness;
