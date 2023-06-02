import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
  IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Thegalaxy.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Thegalaxy() {
  const contentRef = createRef<HTMLIonContentElement>();

  function scrollToBottom() {
    contentRef.current?.scrollToBottom(3000);
  }

  function scrollToTop() {
    contentRef.current?.scrollToTop(3000);
  }

  const [favorites, setFavorites] = useState<string[]>([]); // Array to store favorite images

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = () => {
    const imageSrc = document.getElementById('fault')?.getAttribute('src'); // Get the image source
    if (imageSrc && !favorites.includes(imageSrc)) {
      const updatedFavorites = [...favorites, imageSrc];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };


  return (
    <IonPage>
      <IonHeader className='head2' >
        <IonToolbar color='translucent'>
           <div className='header'>
            <Link to='library'>
          <IonIcon className='head' color='dark' icon={arrowBack}/>
          </Link>
          <IonTitle className='galaxytitle'>The Galaxy</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="ion-padding" fullscreen>
     <IonImg className='galaxy' src="assets\img\thegalaxy.jpg"/>
     <br/>
     <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
     <br/>
     <br/>
     <IonTitle className='galaxybook'>&nbsp;  The Galaxy </IonTitle>
     <br/>
     <IonLabel className='desc' >The Galaxy is a novel by Douglas Adams.</IonLabel> <br/>
      <IonLabel className='desc'>It is his five novel in one outrageous volume.</IonLabel> <br/>
      <IonLabel className='desc'>It was First published on January 17, 1996</IonLabel> <br/> <br/>
      <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
      <div className='Storyl'>
        <IonText className='storyline'>
          <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; 
          Seconds before the Earth is demolished for a galactic freeway, Arthur Dent is saved by Ford Prefect,
           a researcher for the revised Guide. Together they stick out their thumbs to the stars and begin a wild
            journey through time and space.
</p>
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
          </IonText>
          <IonText>
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
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
      </IonContent>
    </IonPage>
  );
};

export default Thegalaxy;
