import { useState, useEffect } from 'react';
import './workout.scss';

const Workout = () => {
  const [displayWorkouts, setDisplayWorkouts] = useState([]);
  const [initialWorkouts, setInitialWorkouts] = useState([]);
  const [workoutLevel, setWorkoutLevel] = useState(0);
  const [workoutCategory, setWorkoutCategory] = useState('');
  const [workoutSearch, setWorkoutSearch] = useState('');

  useEffect(() => {
    (async () => {
      const apiWorkouts =
        'https://raw.githubusercontent.com/stefanofitness/fitnessWebPageData/main/workoutData.json';
      const responseWorkouts = await fetch(apiWorkouts);
      const tempWorkouts = await responseWorkouts.json();
      setInitialWorkouts(tempWorkouts);
      console.log(tempWorkouts);
    })();
  }, []);

  useEffect(() => {
    const checkIfLevelIsOk = (workout) => {
      let levelIsOk = true;
      if (workoutLevel === 0) {
        levelIsOk = true;
      } else {
        levelIsOk = workout.level === workoutLevel;
      }
      return levelIsOk;
    };
    const checkIfCategoryIsOk = (workout) => {
      let categoryIsOk = true;
      if (workoutCategory === '') {
        categoryIsOk = true;
      } else {
        categoryIsOk = workout.category
          .toUpperCase()
          .includes(workoutCategory.toUpperCase());
      }
      return categoryIsOk;
    };
    const checkIfSearchIsOk = (workout) => {
      let searchIsOk = true;
      if (workoutSearch === '') {
        searchIsOk = true;
      } else {
        searchIsOk = workout.title
          .toUpperCase()
          .includes(workoutSearch.toUpperCase());
      }
      return searchIsOk;
    };
    const filterWorkouts = () => {
      setDisplayWorkouts(
        initialWorkouts.filter((workout) => {
          return (
            checkIfLevelIsOk(workout) &&
            checkIfCategoryIsOk(workout) &&
            checkIfSearchIsOk(workout)
          );
        })
      );
    };
    filterWorkouts();
  }, [initialWorkouts, workoutLevel, workoutCategory, workoutSearch]);

  const changeWorkoutLevel = (e) => {
    const level = parseInt(e.target.value);
    setWorkoutLevel(level);
  };
  const changeWorkoutCategory = (e) => {
    const category = e.target.value;
    setWorkoutCategory(category);
  };
  const changeWorkoutSearch = (e) => {
    const search = e.target.value;
    setWorkoutSearch(search);
  };
  return (
    <div className='Workout'>
      <div className='selectworkout'>
        <label className='workoutLabel' htmlFor='tipoWorkout'>
          TIPO DI ALLENAMENTO
        </label>
        <select
          onChange={(e) => changeWorkoutCategory(e)}
          name='workoutSelectCategory'
          className='workoutSelectCategory'
        >
          <option value=''>tutti</option>
          <option value='full body'>full body</option>
          <option value='schiena'>schiena</option>
          <option value='petto'>petto</option>
          <option value='braccia e spalle'>braccia e spalle</option>
          <option value='gambe e glutei'>gambe e glutei</option>
          <option value='addominali'>addominali</option>
          <option value='brucia grassi'>brucia grassi</option>
        </select>
        <label className='workoutLabel' htmlFor='livello'>
          LIVELLO
        </label>
        <select
          onChange={(e) => changeWorkoutLevel(e)}
          name='workoutSelectLevel'
          className='workoutSelectLevel'
        >
          <option value='0'>tutti</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <div className='trainingSearch'>
          <label htmlFor=''>cerca per nome</label>
          <input
            className='searchInput'
            onChange={(e) => changeWorkoutSearch(e)}
            value={workoutSearch}
            type='text'
            name='q'
            aria-label='Search through site content'
          />
        </div>
      </div>
      {/* <div id="workoutsContainer"> */}
      {displayWorkouts.map((workout, index) => (
        <div key={index} className='workoutWrapper'>
          <div className='workoutText'>
            <h2 className='workoutTitle'>{workout.title}</h2>
            <small className='workoutCategory'>{workout.category}</small>
            <small className='workoutLevel'>{workout.level}</small>
          </div>
          <img
            className='workoutImage'
            src={workout.image}
            alt={workout.imageAlt}
          />
          <p className='workoutDescription'>{workout.description}</p>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Workout;
