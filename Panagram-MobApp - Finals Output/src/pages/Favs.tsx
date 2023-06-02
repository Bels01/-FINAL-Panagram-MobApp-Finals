import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonLabel, IonImg, IonText,IonFooter, IonIcon, useIonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { ellipse, heart, home, library, person, square, triangle } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import './Favs.css';

const Favs: React.FC = () => {
  const [present, dismiss] = useIonLoading();

  const [favorites, setFavorites] = useState<string[]>([]); // Array to store favorite images

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <IonPage>
      <IonHeader color='#000'> 
      </IonHeader>
      <IonContent fullscreen>
      <h2>My Favorites</h2>
        {favorites.map((imageSrc, index) => (
          <img className='images' key={index} src={imageSrc} alt="Favorite Image" />
        ))}
      </IonContent>
      <IonFooter className='navi' >
        <IonToolbar>
          <IonTitle>
            <div className='navbar'>
            <a href='tab2'> 
            <IonIcon  className='navhome' icon={home}onClick={() => {
        present({  duration: 400, }); }}/>
            </a>
           <Link to="library">
           <IonIcon className='navlibrary' icon={library} onClick={() => {
        present({  duration: 400, }); }}/>
           </Link>
           <a href='favs'>
            <IonIcon className='navfavorites' icon={heart}/>
            </a> 

            <Link to='account'>
            <IonIcon className='navaccount' icon={person}onClick={() => {
        present({  duration: 400, }); }}/>
            </Link>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Favs;
