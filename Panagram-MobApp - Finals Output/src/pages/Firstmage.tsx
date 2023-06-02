import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
  IonPage, IonText, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Firstmage.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


function Tab1() {
  const contentRef = createRef<HTMLIonContentElement>();
  const [favorites, setFavorites] = useState<string[]>([]); // Array to store favorite images
  const [present, dismiss] = useIonLoading();

  function scrollToBottom() {
    contentRef.current?.scrollToBottom(1000);
  }

  function scrollToTop() {
    contentRef.current?.scrollToTop(1000);
  }


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = () => {
    const imageSrc = document.getElementById('myImage')?.getAttribute('src'); // Get the image source
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
          <IonIcon className='head' color='dark' icon={arrowBack} onClick={() => {
        present({  duration: 1000, spinner:'circular' }); }}/>
          </Link>
          <IonTitle className='magetitle'>The First Mage</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="ion-padding" fullscreen>
     <IonImg className='mage' id="myImage" src="assets/panagram books/thefirstmage.jpg" alt='My Image'/>
     <IonButton  onClick={addToFavorites}>Add to My Favorites</IonButton>
     <br/>
     <br/>
     <IonTitle >&nbsp;  The First Mage</IonTitle>
     <br/>
     <IonLabel className='desc' >The First Mage is a novel by exectails.</IonLabel> <br/>
      <IonLabel className='desc'>It is his fourth solo novel, and sixth novel overall.</IonLabel> <br/>
      <IonLabel className='desc'>It was published on  March 20, 2001</IonLabel> <br/> <br/>
      <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
      <div className='storyfirstmage'>
        <IonText className=''>
          <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; 
          Fifteen years of age. That's when you receive your Calling. Your destiny, "bestowed upon you by the grace of the gods," 
          as the priests say. There are a variety of Callings, but most common people have equally common destinies. Fighters
         usually end up as soldiers or guards, and Handiworkers as carpenters or seamstresses. There are also some more exciting possibilities, however.
          Everyone knows the stories of commoners becoming aristocrats or even monarchs. Most kids I know had dreamed of that at some point in their life.
         Eventually, however, we all realized that it's exceedingly rare to get a Calling different from those of your parents.
          As the son of two Handiworkers, I was certain this would be my destiny as well. And it was. Just not in a way I could've ever anticipated.</p>
        <p className='line1'>&nbsp; &nbsp;
        I was standing in front of the temple. A large, stark white building at the center of town, that you could see from all the way down the main street, at the town gates at the south wall.
        It took me a while to get here from our house at the outskirts of town, but as far as I was concerned, this was preferable to living closer to the center. Nobody I knew would ever be able 
        to afford more than a small flat there. I had been lucky to have lived my entire life in a single-family house, with an entire room to myself.
        When my father was still alive, he made good money working as a carpenter for the aristocracy, which had allowed my parents to afford our home. Nowadays, with only my mother and me, 
        we were able to get by, but I was hoping to change that. When I would finally get my Calling, I would be able to properly contribute. With this thought, I entered the temple through large double doors, 
        easily twice my height. I walked into the reception area, with an archway on both the left and the right of the room that led deeper into the temple.</p>
          </IonText>
          <br/>
          <br/>
          <IonText>
            <p className='line1'><b>Chapter 2</b><br/>
            &nbsp; &nbsp;
            I walked into the reception area, with an archway on both the left and the right of the room that led deeper into the temple. A man in a white robe stood behind a counter and was waiting for me to come closer.
            "Good Morning, young man. Ritual?"
            "Yes," I replied.
            "To your right. We don't have many candidates this year, so you won't have to wait long until we call your name."
            "Thank you."
            Entering the other room, I saw about thirty people who appeared to be waiting already. The rituals would start at noon and I guessed I had been the last one to arrive.
            I recognized a few of the faces here. Some neighbors I had played with when I was younger and people I met in class, when I had learned basic reading and writing years ago. There were also some
            considerably more well dressed men and women, who didn't seem too pleased to be in one room with commoners.
            </p>
          </IonText>
          <IonText>
            <p className='line1'>
            I greeted a few of the others and then waited, staring at one of the doors at the farside of the room. The door to the ritual room, with a guard stationed on either side.
            I had visited the temple in the past, as the school was here, but the only time anyone was allowed inside that room was during their Calling ritual. After a little while, 
            a priest appeared from inside and started calling people in. They would enter, the door closed, and a minute later they came back out, with the brightest smiles I had ever 
            seen on anyone's face.</p>
            
          </IonText>
         
        </div>  
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
