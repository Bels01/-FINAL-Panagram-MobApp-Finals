import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
  IonPage, IonText, IonTitle, IonToolbar, useIonLoading, IonLoading  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Redrising.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Redrising() {
  const contentRef = createRef<HTMLIonContentElement>();
  const [present, dismiss] = useIonLoading();
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
    const imageSrc = document.getElementById('redrising')?.getAttribute('src'); // Get the image source
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
          <IonIcon className='head' icon={arrowBack} onClick={() => {
            present({ message: 'Loading...', duration: 1000, spinner: 'circular'}); }}></IonIcon>
          </Link>
          <IonTitle className='redrisingtitle'>Red Rising</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="ion-padding" fullscreen>
     <IonImg id="redrising" className='fault' src="assets\img\redirising.jpg" alt="redrising"/>
     <IonButton onClick={addToFavorites}>Add to My Favorites</IonButton>
     <br/>
     <br/>
     <IonTitle className='bookredrising'>&nbsp; Red Rising</IonTitle>
     <br/>
     <IonLabel className='desc' >The Fault in Our Stars is a novel by John Green.</IonLabel> <br/>
      <IonLabel className='desc'>It is his fourth solo novel, and sixth novel overall.</IonLabel> <br/>
      <IonLabel className='desc'>It was published on January 10, 2012</IonLabel> <br/> <br/>
      <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
      <div className='storyredrising'>
        <IonText className='storyline'>
          <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; 
          Darrow is a Red, a member of the lowest caste in the color-coded society of the future. Like his fellow Reds, he works all day, 
          believing that he and his people are making the surface of Mars livable for future generations.
          Yet he spends his life willingly, knowing that his blood and sweat will one day result in a better world for his children. But Darrow
           and his kind have been betrayed. Soon he discovers that humanity already reached the surface generations ago. Vast cities and sprawling
         parks spread across the planet. Darrow—and Reds like him—are nothing more than slaves to a decadent ruling class.</p>
        <p className='line1'>&nbsp; &nbsp;
        Inspired by a longing for justice, and driven by the memory of lost love, Darrow sacrifices everything to infiltrate the legendary Institute,
         a proving ground for the dominant Gold caste, where the next generation of humanity's overlords struggle for power. He will be forced to 
         compete for his life and the very future of civilization against the best and most brutal of Society's ruling class. There, he will stop 
         at nothing to bring down his enemies... even if it means he has to become one of them to do so.</p>
          </IonText>
          <br/>
          <br/>
          <IonText>
            <p className='line1'><b>Chapter 2</b><br/> &nbsp; &nbsp;
            As a Red, Darrow grew up working the mines deep beneath the surface of Mars, enduring backbreaking 
            labor while dreaming of the better future he was building for his descendants. But the Society he 
            faithfully served was built on lies. Darrow’s kind have been betrayed and denied by their elitist masters,
             the Golds—and their only path to liberation is revolution. And so Darrow sacrifices himself in the name 
             of the greater good for which Eo, his true love and inspiration, laid down her own life. He becomes a 
             Gold, infiltrating their privileged realm so that he can destroy it from within.
            </p>
          </IonText>
          <IonText>
            <p className='line1'>
            A lamb among wolves in a cruel world, Darrow finds friendship, respect, and even love—but also the
             wrath of powerful rivals. To wage and win the war that will change humankind’s destiny, Darrow must
             confront the treachery arrayed against him, overcome his all-too-human desire for retribution—and strive 
             not for violent revolt but a hopeful rebirth. Though the road ahead is fraught with danger and deceit,
             Darrow must choose to follow Eo’s principles of love and justice to free his people.
             Darrow would have lived in peace, but his enemies brought him war. The Gold overlords demanded his 
             obedience, hanged his wife, and enslaved his people. But Darrow is determined to fight back. Risking 
             everything to transform himself and breach Gold society, Darrow has battled to survive the cutthroat
              rivalries that breed Society’s mightiest warriors, climbed the ranks, and waited patiently to unleash 
              the revolution that will tear the hierarchy apart from within.
            </p>
            
          </IonText>
         
        </div>  
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
      </IonContent>
    </IonPage>
  );
};

export default Redrising;
