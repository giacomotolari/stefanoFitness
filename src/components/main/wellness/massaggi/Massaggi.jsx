import { useState, useEffect } from 'react';

import './massaggi.scss';
import initialMassaggi from './massaggiData';

const Massaggi = () => {
  const [massaggi, setMassaggi] = useState(initialMassaggi);
  const [massaggiSportivi, setMassaggiSportivi] = useState('');
  const [massaggiEstetici, setMassaggiEstetici] = useState('');
  const [massaggiSearch, setMassaggiSearch] = useState('');

  useEffect(() => {
    const checkIfSportiviIsOk = (massaggio) => {
      let sportiviIsOk = true;
      if (massaggiSportivi === '') {
        sportiviIsOk = true;
      } else {
        sportiviIsOk = massaggio.category === massaggiSportivi;
      }
      return sportiviIsOk;
    };
    const checkIfEsteticiIsOk = (massaggio) => {
      let esteticiIsOk = true;
      if (massaggiEstetici === '') {
        esteticiIsOk = true;
      } else {
        esteticiIsOk = massaggio.category === massaggiEstetici;
      }
      return esteticiIsOk;
    };
    const checkIfSearchIsOk = (massaggio) => {
      let searchIsOk = true;
      if (massaggiSearch === '') {
        searchIsOk = true;
      } else {
        searchIsOk = massaggio.title
          .toUpperCase()
          .includes(massaggiSearch.toUpperCase());
      }
      return searchIsOk;
    };
    const filterMassaggi = () => {
      setMassaggi(
        initialMassaggi.filter((massaggio) => {
          return (
            checkIfSportiviIsOk(massaggio) &&
            checkIfEsteticiIsOk(massaggio) &&
            checkIfSearchIsOk(massaggio)
          );
        })
      );
    };
    filterMassaggi();
  }, [massaggiSportivi, massaggiEstetici, massaggiSearch]);

  const changeMassaggiSportivi = (e) => {
    const category = e.target.value;
    setMassaggiSportivi(category);
  };
  const changeMassaggiEstetici = (e) => {
    const category = e.target.value;
    setMassaggiEstetici(category);
  };
  const changeMassaggiSearch = (e) => {
    const search = e.target.value;
    setMassaggiSearch(search);
  };
  return (
    <div className='Massaggi'>
      <div className='selectmassaggi'>
        <label className='massaggiLabel' for='fasciaMuscolare'>
          MASSAGGI PER SPORTIVI
        </label>

        <select
          onChange={(e) => changeMassaggiSportivi(e)}
          name='massaggiSelectFascia'
          className='massaggiSelectFascia'
        >
          <option value=''>tutti</option>
          <option value='decontratturante'>decontratturante</option>
          <option value='miofasciale'>miofasciale</option>
          <option value='stretching massage'>stretching massage</option>
        </select>
        <label className='massaggiLabel' for='livello'>
          MASSAGGI ESTETICI
        </label>

        <select
          onChange={(e) => changeMassaggiEstetici(e)}
          name='massaggiSelectLevel'
          className='massaggiSelectLevel'
        >
          <option value='tutti'>tutti</option>
          <option value='fisiocircolatorio'>fisiocircolatorio</option>
          <option value='linfodrenante'>linfodrenante</option>
          <option value='massaggio relax'>massaggio relax</option>
        </select>
        <div className='trainingSearch'>
          <label htmlFor=''>cerca per nome</label>
          <input
            className='searchInput'
            onChange={(e) => changeMassaggiSearch(e)}
            value={massaggiSearch}
            type='text'
            name='q'
            aria-label='Search through site content'
          />
        </div>
      </div>
      {massaggi.map((massaggi) => (
        <div className='massaggiWrapper'>
          <div className='massaggiText'>
            <h2 className='massaggiTitle'>{massaggi.title}</h2>
            <small className='massaggimuscleGroup'>
              {massaggi.muscleGroup}
            </small>
            <small className='massaggiDifficulty'>{massaggi.difficulty}</small>
          </div>
          <img
            className='massaggiImage'
            src={massaggi.image}
            alt={massaggi.imageAlt}
          />
          <p className='massaggiDescription'>{massaggi.description}</p>
        </div>
      ))}
      ;
    </div>
  );
};

export default Massaggi;
