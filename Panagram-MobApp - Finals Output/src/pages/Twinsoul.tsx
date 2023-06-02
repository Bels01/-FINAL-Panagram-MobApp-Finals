import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
    IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Twinsoul.css';
  import { IonIcon } from '@ionic/react';
  import React, { createRef } from 'react';
  import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
  
  function Tab7() {
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
    const imageSrc = document.getElementById('twinsoul')?.getAttribute('src'); // Get the image source
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
            <IonTitle className='vtitle'>Twin Soul</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="ion-padding" fullscreen>
       <IonImg className='fault' id='twinsoul' src="assets\panagram books\Twinsouls.jpg"/>
       <IonButton  onClick={addToFavorites} >Add to My Favorites</IonButton>
       <br/>
       <br/>
       <IonTitle >&nbsp;  Twin Soul</IonTitle>
       <br/>
       <IonLabel className='desc' >Twin Soul is a novel by Zskyph.</IonLabel> <br/>
        <IonLabel className='desc'>It is his fourth solo novel, and sixth novel overall.</IonLabel> <br/>
        <IonLabel className='desc'>It was published on March 30, 2012</IonLabel> <br/> <br/>
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
        <div className='Twinsoul'>
          <IonText className=''>
            <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; 
            There are many universes. Each universe contained countless realms. Each realm contained several planets.
            Some planets have different races of humans containing different skin and hair colors, different magical creatures,
            or different types of Demi-Humans. Some planets specialized in martial arts training while other planets specialized
            in magic spells casting.</p>
          <p className='line1'>&nbsp; &nbsp;
          In the World of Toria Continents, where all humans have blonde hair. Magic casters and Demi-Humans exist.
          Only one in every ten thousand people was born with an Elemental Soul, which helped them to be able to learn
          and cast magic spells. There are Fire, Ice, Thunder, Earth, Wind, Angelic, Demonic, and Conjurer Souls. One in 
          every million people is born with a Twin Soul that allows them to learn Blood Magic and another type of magic of their choice, 
          whether it is Fire, Ice, Thunder, Earth, Wind, Light, Black, or Conjuration Magic. However, the magic casters born with Twin Soul 
          were forced to train Blood Magic if they wanted to level up in other Elemental Magic as well. Blood Magic requires human blood for 
          training. Animals' blood, magical creatures' blood, or the blood of Demi-humans can't be used.
          Toria Continents were once greatly suffered under an evil level 100 Saint-tier magic caster that used Blood and Fire Magics.
           The evil Saint-tier Blood Mage was defeated after a deadly battle between her and another two thousand Saint-tier magic casters. 
           Over eighteen hundred Saint-tier Mages were lost in this battle but they later found out that they didn't actually defeat that Blood Mage
            because she somehow revived herself after being killed. One out of many history books carefully explained that the evil Saint Blood Mage 
            can create two extra versions of herself. As two versions were killed in the battle, the third version escaped and later revived the other two versions. T
            his book was sealed from world knowledge because the Mages Council didn't want people to lose their faith in them.</p>
            </IonText>
            <br/>
            <br/>
            <IonText>
              <p className='line1'><b>Chapter 2</b><br/>
              &nbsp; &nbsp;
              The Mages Council then sent another two thousand Saint Mages to hunt her down. However, not long after that battle, she advanced into God-tier 
              and left Toria Continents to travel to higher realms reserved for God-tier Warriors and God-tier Mages. Many people have forgotten her name as 
              time passed, but the Mages Council history book had a chapter dedicated to that evil level 100 Saint-tier Blood Mage. Her name was Vierna Pharm.
              All history books that wrote about Vierna Pharm described that she can use Blood, Fire, Wind, and Light Magics which was unbelievable since no other
              Blood Mage can achieve that. 
              </p>
            </IonText>
            <IonText>
              <p className='line1'>
              Many have questioned if the history book was exaggerated about that incident or not since all Blood Mages can only use 
              Blood Magic and another type of Elemental Magic. No Blood Mage can ever use three different types of magic so how can Vierna Pharm use four different 
              types of magic including Blood Magic?
              After Vierna Pharm became God-tier and traveled to the higher realms, the Mages Council decided to forbid Blood Magic permanently. Therefore, all children
              at the age of three were required to be examined. If any children who have Twin Soul were discovered, they will be executed immediately. This law applies
              to everyone, including royalty members, and family members of the Mages Council.
              </p>
              
            </IonText>
           
          </div>  
          <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tab7;
  