import { useState, useEffect } from 'react';
import './workout.scss';
const Workout = () => {
  
  const [workoutLevel, setWorkoutLevel] = useState(0);
  const [workoutCategory, setWorkoutCategory] = useState('');
  const [workoutSearch, setWorkoutSearch] = useState('');
  const [initialWorkouts, setInitalWorkouts] = useState([]);
  const [workouts, setWorkouts] = useState(initialWorkouts);

  useEffect(() => {
    (async () => {
      let response = await fetch('https://raw.githubusercontent.com/stefanofitness/fitnessWebPageData/main/workoutData.json');
      response = await response.json();
      setInitalWorkouts(response);
    }
    )();
  }, []);
  
  window.addEventListener('scroll', () => {
    const selectWorkoutElement = document.querySelector('.selectworkout');
    selectWorkoutElement.classList.toggle('sticky', window.scrollY > 0);
  });

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
      setWorkouts(
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
  }, [workoutLevel, workoutCategory, workoutSearch,initialWorkouts]);

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
          <label htmlFor=''>CERCA PER NOME</label>
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
      {workouts.map((workout, index) => (
        // https://www.youtube.com/watch?v=ptdaPC2NADc&t=587s

        <div
          className='WorkoutContainer'
          data-aos='flip-down'
          ata-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
          aria-haspopup='true'
        >
          <div key={index} className='workoutWrapper'>
            <div className='workoutText'>
              <h2 className='workoutTitle'>{workout.title}</h2>
              <small className='workoutCategory'>{workout.category}</small>
              <small className='workoutLevel'>{workout.level}</small>
            </div>
            <img
              className='workoutImage'
              src={workout.video}
              alt={workout.videoAlt}
            />
            <p className='workoutDescription'>{workout.description}</p>
          </div>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Workout;
