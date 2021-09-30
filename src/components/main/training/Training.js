import { Route } from 'react-router-dom';
import './training.scss';
import TrainingNav from './trainingNav/TrainingNav';
import Workout from './workout/Workout';
// import Workout from './workout/WorkoutWithFetch';
import Exercise from './exercise/Exercise';
import Tabelle from './tabelle/Tabelle';
import Appuntamenti from './appuntamenti/Appuntamenti';

const Training = () => {
  return (
    <div className='Training'>
      <TrainingNav />
      <section className='trainingBody'>
        <Route path='/training/exercise'>
          <Exercise />
        </Route>
        <Route path='/training/tabelle'>
          <Tabelle />
        </Route>
        <Route path='/training/appuntamenti'>
          <Appuntamenti />
        </Route>
        <Route exact path='/training'>
          <Workout />
        </Route>
      </section>
    </div>
  );
};

export default Training;
