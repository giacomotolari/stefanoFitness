import { useState, useEffect } from 'react';
import './exercise.scss';
import initialexercises from './exerciseData';
const Exercise = () => {
  const [exercises, setExercises] = useState(initialexercises);
  const [exerciseLevel, setexErciseLevel] = useState(0);
  const [exerciseCategory, setExerciseCategory] = useState('');
  const [exerciseSearch, setExerciseSearch] = useState('');

  useEffect(() => {
    const checkIfLevelIsOk = (exercise) => {
      let levelIsOk = true;
      if (exerciseLevel === 0) {
        levelIsOk = true;
      } else {
        levelIsOk = exercise.level === exerciseLevel;
      }
      return levelIsOk;
    };
    const checkIfCategoryIsOk = (exercise) => {
      let categoryIsOk = true;
      if (exerciseCategory === '') {
        categoryIsOk = true;
      } else {
        categoryIsOk = exercise.category === exerciseCategory;
      }
      return categoryIsOk;
    };
    const checkIfSearchIsOk = (exercise) => {
      let searchIsOk = true;
      if (exerciseSearch === '') {
        searchIsOk = true;
      } else {
        searchIsOk = exercise.title
          .toUpperCase()
          .includes(exerciseSearch.toUpperCase());
      }
      return searchIsOk;
    };
    const filterexercises = () => {
      setExercises(
        initialexercises.filter((exercise) => {
          return (
            checkIfLevelIsOk(exercise) &&
            checkIfCategoryIsOk(exercise) &&
            checkIfSearchIsOk(exercise)
          );
        })
      );
    };
    filterexercises();
  }, [exerciseLevel, exerciseCategory, exerciseSearch]);

  const changeexerciseLevel = (e) => {
    const level = parseInt(e.target.value);
    setexErciseLevel(level);
  };
  const changeexerciseCategory = (e) => {
    const category = e.target.value;
    setExerciseCategory(category);
  };
  const changeexerciseSearch = (e) => {
    const search = e.target.value;
    setExerciseSearch(search);
  };
  return (
    <div className='Exercise'>
      <div className='selectexercise'>
        <label className='exerciseLabel' htmlFor='tipoexercise'>
          TIPO DI ALLENAMENTO
        </label>
        <select
          onChange={(e) => changeexerciseCategory(e)}
          name='exerciseSelectCategory'
          className='exerciseSelectCategory'
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
        <label className='exerciseLabel' htmlFor='livello'>
          LIVELLO
        </label>
        <select
          onChange={(e) => changeexerciseLevel(e)}
          name='exerciseSelectLevel'
          className='exerciseSelectLevel'
        >
          <option value='0'>tutti</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <div className='trainingSearch'>
          <label htmlFor="">cerca per nome</label>
          <input className='searchInput'
            onChange={(e) => changeexerciseSearch(e)}
            value={exerciseSearch}
            type='text'
            name='q'
            aria-label='Search through site content'
          />
        </div>
      </div>
      {exercises.map((exercise, index) => (
        <div key={index} className='exerciseWrapper'>
          <div className='exerciseText'>
            <h2 className='exerciseTitle'>{exercise.title}</h2>
            <small className='exerciseCategory'>{exercise.category}</small>
            <small className='exerciseLevel'>{exercise.level}</small>
          </div>
          <img
            className='exerciseImage'
            src={exercise.image}
            alt={exercise.imageAlt}
          />
          <p className='exerciseDescription'>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
