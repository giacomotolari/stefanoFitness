import './main.scss';
import { Switch, Route } from 'react-router-dom';
import Wellness from './wellness/Wellness';
import Training from './training/Training';
import Contact from './contact/Contact';
import About from './about/About';
import Home from './home/Home2';
import Facebook from './facebook/Facebook';
import Instagram from './instagram/Instagram';

function Main() {
  return (
    <div className='Main'>
      <Switch>
        <Route path='/training'>
          <Training />
        </Route>
        <Route path='/wellness'>
          <Wellness />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/facebook'>
          <Facebook />
        </Route>
        <Route path='/instagram'>
          <Instagram />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
