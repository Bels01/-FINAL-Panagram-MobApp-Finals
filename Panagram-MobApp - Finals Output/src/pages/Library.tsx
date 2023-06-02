import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar,IonImg, IonButton,IonFooter,IonIcon, IonSearchbar, useIonLoading} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Library.css';
import { ellipse, heart, home, library, person, square, triangle } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { Route, Redirect } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Library: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  const [search, setSearch] = useState('');
  const history = useHistory();

  const btnsearch = () => {
    if (search === 'The Galaxy' || search == 'the galaxy') {
      history.push('/tab5');
      
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
          <IonButton className='btnsearch' color='white' shape='round' onClick={btnsearch}>Search</IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} className='IonPadding'>
        <br/>
        <IonLabel className='home'>Library</IonLabel>
        <br/>
        <br/>
        <div className='wrapper'>
        <a className='title'>
        <IonImg className='book' src="assets\panagram books\CondemingTheHeavens.jpg"/>
        </a>

        <a >
        <IonImg className='book' src="assets\panagram books\ForgedofDestiny.jpg"/>
        </a>

        <Link to='/synth'>
        <IonImg className='book' src="assets\panagram books\Synth..jpg" onClick={() => {
        present({  duration: 1500, }); }}></IonImg>
        </Link>
        </div>

        <div className='wrapper'>
        
        <IonImg className='book' src="assets\panagram books\Thechamberoftime.jpg"/>
        

        <Link to='/firstmage'>
        <IonImg className='book' src="assets\panagram books\thefirstmage.jpg" onClick={() => {
        present({  duration: 500, spinner:'circular' }); }}></IonImg>
        </Link>

        <a >
        <IonImg className='book' src="assets\panagram books\TheGhost.jpg"/>
        </a>
        </div>

        <div className='wrapper'>
        <a href=''>
        <IonImg className='book' src="assets\img\marthawells.jpg"/>
        </a>

        <Link to='/redrising'>
        <IonImg className='book' src="assets\img\redirising.jpg" onClick={() => {
        present({  duration: 500, spinner:'circular' }); }}></IonImg>
        </Link>

        <Link to='/stranger'>
        <IonImg className='book' src="assets\img\strange.jpg" onClick={() => {
        present({  duration: 500, spinner:'circular' }); }}></IonImg>
        </Link>
        </div>

        <div className='wrapper'>
        <IonImg className='book' src="assets\img\hiddenpictures.jpg"/>
        <IonImg className='book' src="assets\img\Mexican-Gothic.jpg"/>
        <IonImg className='book' src="assets\img\MyHeartisaChainsaw.jpg"/>
        </div>

        <div className='wrapper'>
        <Link to='/Walking'>
        <IonImg className='book' src="assets\panagram books\walkingtoaldebaran.jpg"  onClick={() => {
        present({  duration: 400, }); }}></IonImg>
        </Link>

        <Link to='/Twinsoul'>
        <IonImg className='book' src="assets\panagram books\Twinsouls.jpg" onClick={() => {
        present({  duration: 400, }); }}></IonImg>
        </Link>
        <Link to='/Acourt'>
        <IonImg className='book' src="assets\panagram books\ACourtt.jpg" onClick={() => {
        present({ duration: 600, spinner:'circular' }); }}/>
        </Link>
        </div>
        <div className='wrapper'>
        <IonImg className='book' src="assets\img\book2.jpg"/>
        <IonImg className='book' src="assets\img\circe.jpg"/>
        <IonImg className='book' src="assets\img\book5.jpg"/>
        </div>
        <div className='wrapper'>
        <IonImg className='book' src="assets\panagram books\War begin.jpg"/>
        <IonImg className='book' src="assets\panagram books\the eye of the God.jpg"/>
        <IonImg className='book' src="assets\panagram books\The Protocol.png"/>
        </div>
        <div className='wrapper'>
        <IonImg className='book' src="assets\panagram books\The Omega Strain.png"/>
        <IonImg className='book' src="assets\panagram books\apocalypse.jpg"/>
        <IonImg className='book' src="assets\panagram books\ashes of  the fall.jpg"/>
        </div>
        <div className='wrapper'>
        <Link to='/primarytarget'>
        <IonImg className='book' src="assets\panagram books\primary target.jpg" onClick={() => {
        present({  duration: 400, }); }}></IonImg>
        </Link>
        <Link to='/Thegalaxy'>
        <IonImg className='book' src="assets\img\thegalaxy.jpg" onClick={() => {
        present({  duration: 400, }); }}></IonImg>
        </Link>
        <Link to='/Thestand'>
        <IonImg className='book' src="assets\img\thestand.jpg" onClick={() => {
        present({  duration: 400, }); }}></IonImg>
        </Link>
        </div>

        <div className='wrapper'>
        <Link to='/bookofaccidents'>
        <IonImg className='book' src="assets\img\thebookofaccidents.jpg" onClick={() => {
        present({  duration: 400, }); }}></IonImg>
        </Link>
        <Link to='/Eragon'>
        <IonImg className='book' src="assets\img\book3.png" onClick={() => {
        present({  duration: 600, }); }}></IonImg>
        </Link>
        <Link to='/Thestand'>
        <IonImg className='book' src="" onClick={() => {
        present({  duration: 400, }); }}></IonImg>
        </Link>
        <Link to='/'>
        <IonImg className='book' src="" onClick={() => {
        present({  duration: 400, }); }}></IonImg>
        </Link>
        </div>
      </IonContent>


      <IonFooter className='navie'>
        <IonToolbar>
          <IonTitle >
            <div className='navbar'>
             <Link to='tab2'>
            <IonIcon  className='navhome' icon={home} onClick={() => {
        present({  duration: 400, }); }}></IonIcon>
            </Link>
           <Link to="library">
           <IonIcon className='navlibra' icon={library}/>
           </Link>
           <Link to='favs'>
            <IonIcon className='navfavs' icon={heart} onClick={() => {
        present({  duration: 400, }); }}/>
            </Link> 
            <Link to='/account'>
            <IonIcon className='navacc' color='dark' icon={person} onClick={() => {
        present({  duration: 400, }); }}/>
            </Link>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
      
     
    </IonPage>
  );
};

export default Library;
