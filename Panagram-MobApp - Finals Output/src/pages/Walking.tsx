import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
    IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Walking.css';
  import { IonIcon } from '@ionic/react';
  import React, { createRef } from 'react';
  import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
  import { Link } from 'react-router-dom';
  import { useEffect } from 'react';
  import { useState } from 'react';

  function Tab8() {
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
    const imageSrc = document.getElementById('walking')?.getAttribute('src'); // Get the image source
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
            <IonIcon className='head' color='light' icon={arrowBack}/>
            </Link>
            <IonTitle className='walkingtitle'><u></u>Walking to Aldebaran</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="ion-padding" fullscreen>
       <IonImg className='fault' id='walking' src="assets/panagram books/walkingtoaldebaran.jpg"/>
       <IonButton onClick={addToFavorites}>Add to My Favorites</IonButton>
       <br/>
       <br/>
       <IonTitle >&nbsp;  Walking to Aldebaran</IonTitle>
       <br/>
       <IonLabel className='desc' >Walking to Aldebaran is a novel by Adrian Tchaikovsky.</IonLabel> <br/>
        <IonLabel className='desc'>It is his first solo novel.</IonLabel> <br/>
        <IonLabel className='desc'>It was published on May 28, 2019</IonLabel> <br/> <br/>
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
        <div className='storyll'>
          <IonText className='storyline'>
            <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; 
            TODAY I FOUND Something I could eat and something I could burn to keep back the darkness. That makes today a good day.
            I don't know what it was or where it came from. Like me, it had been wandering the passageways of this crypt for who knows
            how long- and how long has it been, anyone? No day and no night and I've nothing left with power to tell the time, and so my
            life becomes one long greyness, punctuated by increasingly erratic periods of sleep. I don't need to sleep like I used to. Or I
            need to sleep in some other way, maybe some way that I can't achieve. Every waking is building up a sleep-debt inside me that my
            poor human physiology can't satisfy. Maybe when I change my mind completely I'll be back in balance. For now: anxiety, tremors, mania,
            paranoia, hyperventilation. Or sometimes no ventilation. That's probably worse, but then the air in here is so variable. Seriously, you
            wouldn't want it in your lungs if you had any option.</p>
          <p className='line1'>&nbsp; &nbsp;
            But the thing, the thing I found that brightened my day and filled a hole: it was twice as long as me, but it had been dead a long time
            and that must have shrunk it a bit. The air in this part of the Crypts is very dry. Its outer layers had gone brittle and crispy and I thought 
            there mightn't be anything of substance to it, but when I flaked them off, there was meat underneath, dry and chewy but meat nonetheless. It had
            a dozen many-jointed legs, and I snapped them off and piled them up, a camp fire just like my old scoutmaster taught me, and I used one of my shonky
            little jury- rigged pieces of nonsense to spark it into flames. The air here is dry, but it's short on oxygen too, I can feel it from the way I slow down:
            breathing, moving, thinking. Hard to get a fire lit. And it's so cold here, cold pretty much anywhere you go in the Crypts. I managed it, though. I got 
            everything heated up enough that a guttering little flame caught, and then I huddled over it, trapping the fire between my body and the stone walls until a meagre 
            ration of warmth had no choice but to leach into me.</p>
            </IonText>
            <br/>
            <br/>
            <IonText>
              <p className='line1'><b>Chapter 2</b><br/>
              &nbsp; &nbsp;
              The flesh of the creature tasted like sour dust. I was eating proteins evolved light years from Earth on some planet where twelve-legged, five-metre worm
              people live, but these days my microbiome is omnivorous to say the least. I twisted and groaned as all the little workers in my gut got to grips with the
              new repast. I used to be lactose intolerant, if you can believe it. I used to hurl if I ate cheese, and fart like a trooper if I had too much white bread 
              as well. Now my diet is a catholic one, in the sense of 'all- embracing' rather than 'fish on Fridays.' The outermost layer of the dead thing was a sheath
              that was made, not grown, though it was as disintegratingly friable as the skin within. I tried to ignore the fact. I tried to tell myself the creature was 
              just one more animal denizen of the Crypts, another species seeded here, to evolve or die out. And plenty of them have evolved, believe me. The Crypts have been here 
              for a long, long time - millions, billions of years. Things have grown to love it here. I am not one of those things, although it seems to me I have been here for a long time.
              In human terms, months is a long time to be somewhere as terrible as this. I think it has been months. I hope it's not been years.
              </p>
            </IonText>
            <IonText>
              <p className='line1'>
              But the lack of light and - well, I said about the sleeping, and I'm beginning to think that time is shonky here too. After all, some part of this godforsaken 
              place is giving the laws of relativity a good shafting. My name is Rendell; Gary Rendell. I'm an astronaut. When they asked me, as a kid, what I wanted to be when I grew up, 
              I said, "astronaut, please!" all filled with thoughts of Aldrin and Tereshkova. And though space exploration had been the domain of machines for quite a while, we did have a new 
              crop of astronauts now, off bleeding their lives into the red, red sands of Mars so that, in a generation's time, a cabal of rich guys could turn up and live off what they built.
              But that wasn't the astronaut I wanted to be. I wanted to go into space. I wanted to set foot on alien worlds.
              </p>
              
            </IonText>
           
          </div>  
          <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tab8;
  