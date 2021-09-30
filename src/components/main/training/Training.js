import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './training.scss';
import TrainingNav from './trainingNav/TrainingNav';
import Workout from './workout/Workout';
// import Workout from './workout/WorkoutWithFetch';
import Exercise from './exercise/Exercise';
import Tabelle from './tabelle/Tabelle';

const Training = () => {
  return (
    <Router>
      <div className='Training'>
        <TrainingNav />
        <section className='trainingBody'>
          <Switch>
            <Route path='/training/exercise'>
              <Exercise />
            </Route>
            <Route path='/training/tabelle'>
              <Tabelle />
            </Route>
            <Route exact path='/training'>
              <Workout />
            </Route>
          </Switch>
        </section>
      </div>
   </Router>
  );
};

export default Training;
