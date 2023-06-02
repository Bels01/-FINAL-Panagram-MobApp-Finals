import { IonContent, 
  IonHeader, IonLabel, 
  IonPage, IonTitle, 
  IonToolbar,IonImg, 
  IonButton,IonFooter,
  IonIcon, IonSearchbar, 
  useIonLoading, IonLoading} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { ellipse, heart, home, library, person, square, triangle, star } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { Route, Redirect } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Redrising from './Redrising';

const Tab2: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  const [search, setSearch] = useState('');
  const history = useHistory();

  const btnsearch = () => {
    if (search === 'The Galaxy' || search == 'the galaxy') {
      history.push('/Thegalaxy');
      
    } else if(search == 'Red Rising' || search == 'red rising'){
      history.push('/Redrising');
    }
    else if(search == 'Primary Target' || search == 'primary target'){
      history.push('/Primarytarget');
    }
    else if(search == 'Stranger in a strange land' || search == 'straneger in a strange land'){
      history.push('/Stranger');
    }
    else if(search == 'The Fifth Season' || search == 'the fifth season'){
      history.push('/Thefifth');
    }
    else if(search == 'Twin Soul' || search == 'twin soul'){
      history.push('/Twinsoul');
    }
    else if(search == 'Walking to Aldebaran' || search == 'walking to aldebaran'){
      history.push('/Redrising');
    }
    else if(search == 'Synth' || search == 'synth'){
      history.push('/Synth');
    }


     else {
      alert('Book not found!');
    }
  };

  
  return (
    <IonPage className='page'>
      <IonHeader className='headnav' color='gradient'>
        <IonToolbar >
          <div className='top'>
          <IonSearchbar className='search'  placeholder='Search a book' value={search} 
          onIonChange={(e) => setSearch(e.detail.value!)}></IonSearchbar>
          <IonButton  className='btnsearch' color='white' shape='round' onClick={btnsearch} >Search</IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className='IonPadding'>
        <div>
          <IonImg className='headbook' src="assets\img\the fifth.jpg"/>
          <br/>
          <Link to='/Thefifth'>
          <IonButton id="open-loading" className='read' color="#fff" onClick={() => {
        present({ duration: 500, }); }}>Start Reading</IonButton><br/>
          </Link>
        </div>
        <br/>
        <IonLabel className='home'>Trends</IonLabel>
        <div className='wrapper'>
        <Link className='title' to='Faultinourstar'>
        <IonImg className='book' src="assets\img\book2.jpg"  onClick={() => {
        present({duration: 600, spinner: 'circular'});}}></IonImg>
        </Link>

        <Link to='/Papertowns'>
        <IonImg className='book' src="assets\img\book4.jpg" onClick={() => {
        present({duration: 600, spinner: 'circular'});}}/>
        </Link>

        <Link to='/tab3'>
        <IonImg className='book' src="assets\img\book5.jpg" onClick={() => {
        present({duration: 600, spinner: 'circular'});}}/>
        </Link>
        <IonImg className='book' id="circe" src="assets\img\circe.jpg"/>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='box'>
        <div className='solo'>
          
          <IonImg className='content' src='assets\panagram books\what-if.webp' ></IonImg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
          <div className='content'>
          <h5><u>What if... We Never Met?</u></h5>
          <IonIcon  className='rate' icon={star}></IonIcon><p>Chapter 1
                                                              Prologue
                                                              May 14, 2022</p>
          <Link to='/whatif'>
          <IonButton className='btnread'  onClick={() => {
        present({duration: 600, spinner: 'circular'});}}>Read</IonButton>
          </Link>
          </div>
        </div>
        <p className='description' >One fine afternoon, four friends – Derek, 
        Kendrick, Etelvina, and Leah sit in a park and wonder: What if they never became
         friends? What if they continued to remain strangers all those years ago, after 
         that tragic accident?Their  thoughts seemed to have taken the form of an entity 
         when a mysterious lady walks into  their lives and tells them she has the answer 
          to their questions in the palm of her hands.</p>
          </div>
        <br/>
        <br/>
        <IonLabel className='home'>Sci-Fi</IonLabel>
        <div className='wrapper2'>

        <Link to='/eragon'>
        <IonImg className='book2' src="assets\img\book3.png" onClick={() => {
        present({  duration: 700, }); }}/>
        </Link>
        <IonImg className='book2' src="assets\img\gulliver-s-travel.jpg"/>
        <IonImg className='book2' src="assets\img\peterpan.jpg"/>
        <IonImg className='book2' src="assets\img\marthawells.jpg"/>

        <Link to='/redrising'>
        <IonImg className='book2' src="assets\img\redirising.jpg" onClick={() => {
        present({message: 'Please wait...',duration: 500, spinner: 'circular' });}}></IonImg>
        </Link>

        <IonImg className='book2' src="assets\img\strange.jpg"></IonImg>
        <IonImg className='book2' src="assets\img\thegalaxy.jpg"></IonImg>
        <IonImg className='book2' src="assets\img\thestand.jpg"></IonImg>
        </div>
        <label className='home'>Horror</label>
        <div className='wrapper2'>
        <IonImg className='book2' src="assets\img\hiddenpictures.jpg"/>
        <IonImg className='book2' src="assets\img\Mexican-Gothic.jpg"/>

        <Link to='./chainsaw'>
        <IonImg className='book2' src="assets\img\MyHeartisaChainsaw.jpg"/>
        </Link>

        <IonImg className='book2' src="assets\img\thebookofaccidents.jpg"/>
        </div>
      </IonContent>

      
      <IonFooter className='navi' >
        <IonToolbar>
          <IonTitle>
            <div className='navbar'>
             
            <IonIcon  className='nav1' icon={home}/>
           <Link to="library">
           <IonIcon className='nav4' icon={library} ></IonIcon>
           </Link>
           <Link to='favs'>
            <IonIcon className='nav2' icon={heart} onClick={() => {
        present({  duration: 500, }); }}/>
            </Link> 
            <Link to='account'>
            <IonIcon className='nav3' icon={person} onClick={() => {
        present({  duration: 500, }); }}></IonIcon>
            </Link>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
     
    </IonPage>
  );
};

export default Tab2;
