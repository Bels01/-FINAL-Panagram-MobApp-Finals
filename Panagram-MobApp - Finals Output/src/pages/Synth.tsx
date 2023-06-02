import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
  IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Synth.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { useState } from 'react';
import { useEffect } from 'react';

function Synth() {
  const contentRef = createRef<HTMLIonContentElement>();

  function scrollToBottom() {
    contentRef.current?.scrollToBottom(1000);
  }

  function scrollToTop() {
    contentRef.current?.scrollToTop(1000);
  }

  const [favorites, setFavorites] = useState<string[]>([]); // Array to store favorite images

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = () => {
    const imageSrc = document.getElementById('synth')?.getAttribute('src'); // Get the image source
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
            <a href='/library'>
          <IonIcon className='head' color='dark' icon={arrowBack}/>
          </a>
          <IonTitle className='Synthtitle'>Synth</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="ion-padding" fullscreen>
     <IonImg id='synth' className='synth' src="assets\panagram books\Synth..jpg" alt='synth'/>
     <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
     <br/>
     <br/>
     <IonTitle className='booktitle' >&nbsp;  Synth</IonTitle>
     <br/>
     <IonLabel className='desc' >Synth is a novel by Tyler Maas.</IonLabel> <br/>
      <IonLabel className='desc'>It is his fourth solo novel, and sixth novel overall.</IonLabel> <br/>
      <IonLabel className='desc'>It was published on June 16, 2021</IonLabel> <br/> <br/>
      <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
      <div className='storySynth'>
        <IonText className='storyline'>
          <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; 
          Robot Witch was started by vocalist and synth player Matthew Lubus after his previous band, Moth Light, came to an end.
          After adding guitarist Ryan Koski, Jimmy Rocco on bass, and drummer Eric Morrissey to the mix, the project that 
          initially began by covering The Velvet Underground and jamming together quickly turned into a full-fledged “electric psych rock”
           band. With some audience-tested originals to its name after more than a year together, Robot Witch was planning to release an
            EP last spring until COVID precautions canceled a few of its show and put release plans on hold.</p>
        <p className='line1'>&nbsp; &nbsp;
        Today, Robot Witch is ready to give listeners their first taste of that recorded material by letting us share
         the group’s debut single. “Millennial Hat” melds elements of psych rock and electronic music, as Lubus’ 
         minimalist lyrics are blanketed with a wall of distorted synthesizer, frantic bass and percussion, and 
         blistering guitar solos. </p>
          </IonText>
          <br/>
          <br/>
          <IonText>
            <p className='line1'><b>Chapter 2</b><br/>
            &nbsp; &nbsp;Flight practice was next. All the synths had to be split up into groups of 25 so that they wouldn't 
            crash into one another as they soared around. TO was disheartened to see that DH was not in the same group as they were.
            The room was a large cylinder - similar to the room where they had been incubated but smaller and even for their sensitive 
            eyes, it was very dark: This was supposed to encourage them to use their echolocation. The synths all walked out onto the ledge 
            that encircled the room, and one by one they dove off the ledge, spreading their wings and hopefully taking to the air before hitting the ground.
            TO had taken to flight faster than the others, and had been one of the first to be able to do more than simply glide to the ground. 
            After only a few classes they were able to soar and dive. Now, the flight practice was less like work for them and more like fun; 
            A rest between the quiet and carefully controlled environments that the rest of the day would have for them.
            </p>
          </IonText>
          <IonText>
            <p className='line1'>
            
            </p>
            
          </IonText>
         
        </div>  
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
      </IonContent>
    </IonPage>
  );
};

export default Synth;
