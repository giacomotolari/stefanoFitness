import './main.scss';
import { useContext } from 'react';
import { Context } from '../../App';
import { Switch, Route } from 'react-router-dom';
import Wellness from './wellness/Wellness';
import Training from './training/Training';
import Contact from './contact/Contact';
import About from './about/About';
import Home from './home/Home2';
import Social from './socials/Social';
import facebookTraining from '../../assets/images/facebookTraining.jpg';
import facebookWellness from '../../assets/images/facebookWellness.jpg';
import instagramTraining from '../../assets/images/instagramTraining.png';
import instagramWellness from '../../assets/images/instagramWellness.jpg';

function Main() {
  const { menuToogle } = useContext(Context);

  return (
    <div className={`${menuToogle ? 'MainOff' : 'Main'}`}>
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
          <Social
            socialName='Facebook'
            socialTrainingUrl='https://www.facebook.com/calisthenicscarbonianlf'
            socialTrainingImg={facebookTraining}
            socialWellnessUrl='https://www.facebook.com/stemanca'
            socialWellnessImg={facebookWellness}
          />
        </Route>
        <Route path='/instagram'>
          <Social
            socialName='Instagram'
            socialTrainingUrl='https://www.instagram.com/stemanca_bodysolution/'
            socialTrainingImg={instagramTraining}
            socialWellnessUrl='https://www.instagram.com/trattamento_psicofisico'
            socialWellnessImg={instagramWellness}
          />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
