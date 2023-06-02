import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { heart, home, library, person } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Thefifth from './pages/Thefifth';
import Peterpan from './pages/Peterpan';
import Acourt from './pages/Acourt';
import Faultinourstar from './pages/Faultinourstar';
import Library from './pages/Library';
import Favs from './pages/Favs';
import Account from './pages/Account';
import Regform from './pages/Regform';
import Synth from './pages/Synth';
import Redrising from './pages/Redrising';
import Stranger from './pages/Stranger';
import Firstmage from './pages/Firstmage';
import Primarytarget from './pages/Primarytarget';
import Twinsoul from './pages/Twinsoul';
import Walking from './pages/Walking';
import Thegalaxy from './pages/Thegalaxy';
import PaymentSection from './pages/PaymentSection';
import Thestand from './pages/Thestand';
import Bookofaccidents from './pages/Bookofaccidents';
import Chainsaw from './pages/Chainsaw';
import Eragon from './pages/Eragon';
import Papertowns from './pages/Papertowns';
import Whatif from  './pages/Whatif';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


import './pages/App.css';


setupIonicReact();


const App: React.FC = () => (

 

  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route  path="/tab1" component={Tab1} exact={true} >
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/thefifth">
            <Thefifth/>
            </Route>
            <Route exact path="/peterpan">
            <Peterpan/>
            </Route>
            <Route exact path="/acourt">
            <Acourt/>
            </Route>
            <Route exact path="/faultinourstar">
            <Faultinourstar/>
            </Route>  
            <Route exact path="/library">
            <Library/>
            </Route> 
            <Route exact path="/favs">
            <Favs/>
            </Route>   
            <Route exact path="/account">
            <Account/>
            </Route> 
            <Route  path="/regform" component={Regform} exact={true}>
            <Regform/>
            </Route> 
            <Route exact path="/synth">
              <Synth/>
            </Route> 
            <Route exact path="/redrising">
              <Redrising/>
            </Route>
            <Route exact path='/stranger'>
              <Stranger/>
            </Route>
            <Route exact path='/firstmage'>
              <Firstmage/>
            </Route>
            <Route exact path='/primarytarget'>
              <Primarytarget/>
            </Route>
            <Route exact path='/thegalaxy'>
              <Thegalaxy/>
            </Route>
            <Route exact path='/twinsoul'>
              <Twinsoul/>
            </Route>
            <Route exact path='/walking'>
              <Walking/>
            </Route>
            <Route exact path='/paymentsection'>
              <PaymentSection/>
            </Route>
            <Route exact path='/thestand'>
              <Thestand/>
            </Route>
            <Route exact path="/bookofaccidents">
            <Bookofaccidents/>
            </Route>
            <Route exact path="/chainsaw">
            <Chainsaw/>
            </Route> 
            <Route exact path="/eragon">
            <Eragon/>
            </Route> 
            <Route exact path="/papertowns">
            <Papertowns/>
            </Route> 
            <Route exact path="/whatif">
            <Whatif/>
            </Route> 

          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar className='navbars' slot="bottom">
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={home} className='home-icon'/>
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="library" href="/library">
            <IonIcon aria-hidden="true" icon={library} className='libra-icon' />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="favs" href="/favs">
            <IonIcon aria-hidden="true" icon={heart} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel></IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
