import React from 'react';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import BurgerMenu from './components/navbar/burgermenu/BurgerMenu';

export const Context = React.createContext();

function App() {
  const [menuToogle, setMenuToogle] = useState(false);


  return (
    <Context.Provider
      value={{ menuToogle, setMenuToogle}}
    >
      <Router>
        <div className='App'>
          <Navbar />
          <BurgerMenu />
          <Main />
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
