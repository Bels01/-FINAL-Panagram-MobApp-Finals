import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Thefifth.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Thefifth() {
  const contentRef = createRef<HTMLIonContentElement>();
  function scrollToBottom() {
    contentRef.current?.scrollToBottom(2500);
  }

  function scrollToTop() {
    contentRef.current?.scrollToTop(2500);
  }


  function present(arg0: { message: string; duration: number; }) {
    throw new Error('Function not implemented.');
  }

  const [favorites, setFavorites] = useState<string[]>([]); // Array to store favorite images

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = () => {
    const imageSrc = document.getElementById('fifth')?.getAttribute('src'); // Get the image source
    if (imageSrc && !favorites.includes(imageSrc)) {
      const updatedFavorites = [...favorites, imageSrc];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <IonPage>
      <IonHeader className='head2'>
        <IonToolbar color='translucent'>
           <div className='header'>
            <Link to='/tab2'>
          <IonIcon className='head' color='dark' icon={arrowBack} onClick={() => {
        present({ message: 'loading...', duration: 1500, }); }}></IonIcon>
          </Link>
          <IonTitle className='btitle'>The Fifth Season</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="ion-padding" fullscreen>
     <IonImg id='fifth' className='fifth' src="assets\img\the fifth.jpg"/>
     <IonButton  onClick={addToFavorites} >Add to My Favorites</IonButton>
     <br/>
     <br/>
     <IonTitle >&nbsp;  <u>The Fifth Season</u></IonTitle>
     <br/>
     <IonLabel className='desc' >The Fifth Season, by N.K. Jemisin the first book of 
     the Broken Earth trilogy, published in 2015 follows the journey of Essun, mother 
     and “orogene,” an oppressed, racially defined class of powerful earth-benders in 
     Jemisin's fictitious, supercontinental world, The Stillness.</IonLabel> <br/>
      
      <IonButton className='btnslide' expand="block" color='light' onClick={scrollToBottom}>Scroll to bottom</IonButton>
      <div className='storylln'>
        <IonText className='storyline'>
          <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam convallis magna eget porta imperdiet. Nulla eu dui arcu. 
        Suspendisse tincidunt facilisis condimentum. Suspendisse id massa in orci luctus mollis. 
        Integer eu volutpat lorem. Integer condimentum sodales sapien. Nullam sed consectetur est. 
        Etiam imperdiet dui sed ante vehicula maximus. Nunc ante sapien, congue ut consequat quis, 
        gravida id quam. Nam laoreet dolor et dui fringilla venenatis. Morbi convallis eleifend diam, 
        nec maximus arcu malesuada id. Maecenas eget ultricies massa, et dapibus eros. Praesent dictum 
        nisi et nisi pulvinar pharetra. Praesent tempor fringilla dui eu malesuada. Duis fermentum eros leo, 
        at pretium neque tempor nec.</p>
        <p className='line1'>&nbsp; &nbsp;Phasellus fringilla fringilla turpis nec faucibus. Ut leo 
          turpis, consequat quis sapien a, rutrum porttitor sapien. 
          Suspendisse potenti. Vestibulum ultrices rhoncus sem quis varius. 
          Vestibulum tempor molestie elit, sed scelerisque neque rutrum at. 
          Proin molestie elit eget orci suscipit imperdiet. Pellentesque quis 
          nisi tincidunt, vehicula nisi ac, fermentum velit. Fusce tristique 
          elementum massa, vel dictum metus ullamcorper et. Nam non finibus risus. 
          Donec commodo fringilla mauris, non suscipit leo facilisis quis. Donec 
          sodales eros eros, at vehicula quam tincidunt vel. Ut quis auctor ante. 
          Cras laoreet at dolor et viverra.</p>
          </IonText>
          <br/>
          <br/>
          <IonText>
            <p className='line1'><b>Chapter 2</b><br/>
            &nbsp; &nbsp;In id neque sit amet orci ultricies tincidunt. 
            Donec elementum dolor convallis, euismod felis vitae, 
            volutpat nibh. Cras ac nisi molestie, vehicula lectus sed, 
            condimentum nulla. Nunc sed ultricies orci. Vestibulum laoreet
             fermentum nulla, quis pretium diam. Proin condimentum mollis aliquet.
             Mauris malesuada elit eget dui pharetra sagittis.
            </p>
            <p className='line1'>
            Phasellus nibh mauris, finibus sit amet 
            tincidunt ac, tempor et justo. Aliquam accumsan 
            nunc sit amet lectus auctor elementum. Praesent 
            ullamcorper est vitae mauris varius consectetur. 
            Ut urna lectus, cursus quis interdum mattis, 
            mattis eget nisl. Aliquam placerat mi ex, sit 
            amet varius mauris posuere non. Suspendisse dui 
            enim, finibus non diam quis, mollis suscipit enim. 
            Ut a diam rutrum, fermentum nibh non, consectetur leo. 
            Mauris eros nibh, elementum a lorem vitae, pharetra 
            malesuada neque. Suspendisse condimentum ornare vulputate.
            </p>
            
          </IonText>
         
        </div>  
        <IonButton className='btnslide' expand="block" color='light' onClick={scrollToTop}>Scroll to Top</IonButton> 
      </IonContent>
    </IonPage>
  );
};

export default Thefifth;
function useIonLoading(): [any, any] {
  throw new Error('Function not implemented.');
}

