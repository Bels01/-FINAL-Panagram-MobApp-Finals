import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
    IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Chainsaw.css';
  import { IonIcon } from '@ionic/react';
  import React, { createRef } from 'react';
  import { useEffect } from 'react';
import { useState } from 'react';
  import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
  
  function Chainsaw() {
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
    const imageSrc = document.getElementById('chain')?.getAttribute('src'); // Get the image source
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
              <Link to='tab2'>
            <IonIcon className='head' icon={arrowBack}/>
            </Link>
            <IonTitle className='vtitle'>My Heart is a Chainsaw</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="ion-padding" fullscreen>
       <IonImg id='chain' className='fault' src="assets\img\MyHeartisaChainsaw.jpg"/>
       <br/>
       <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
       <br/>
       <br/>
       <IonTitle className='chainsawbook' >&nbsp;  My Heart is a Chainsaw</IonTitle>
       <br/>
       <IonLabel className='desc' >My Heart is a Chainsaw is a novel by Stephen Graham Jones.</IonLabel> <br/>
        <IonLabel className='desc'>My Heart is a Chainsaw is a deconstruction of slasher films that celebrates everything about them. However, its heart — the real cake under the shiny bloody frosting — is Jade, a girl whose trauma makes her a final girl dreaming of being behind a killer's mask</IonLabel> <br/>
        <IonLabel className='desc'>It was published on August 31, 2021</IonLabel> <br/> <br/>
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
        <div className='chainsawstory'>
          <IonText className=''>
            <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; On the battered paper map that’s carried the two of them 
            across they’re not sure how many of the American states 
            now, this is Proofrock, Idaho, and the dark body of water 
            before them is Indian Lake, and it kind of goes forever 
            out into the night. 
            “Does that mean there’s Indians in the lake, or does it 
            mean that Indians made it?” Lotte asks, a gleam of excite- 
            ment to her eyes. 
            “Everything here’s named after Indians,” Sven says 
            back, whispering because there’s something solemn 
            about being awake when everyone’s asleep. 
            Their rental car is ticking down behind them from the 
            six-hour push from Casper, the doors open because they 
            just wanted to look, to see, to soak all this in before 
            going back to the Netherlands at the end of the week. 
            Lotte shines her phone’s light down onto the fluttering 
            map and looks up from it and across the water, like trying 
            to connect what she’s seeing in lines and grids to what 
            she’s actually standing in. 
            “Wat?” Sven says. 
            “In American,” Lotte tells him for the two-hundredth 
            time. If they want partial course credit for immersion, 
            they have to actually immerse.</p>
          <p className='line1'>&nbsp; &nbsp;</p>
            </IonText>
            <br/>
            <br/>
            <IonText>
              <p className='line1'><b>Chapter 2</b><br/>
              &nbsp; &nbsp;What?” Sven repeats, the word belligerent in English, 
like trying to make elbow room for itself. 
“That should be the national forest on the other side,” 
Lotte says, chinning across the water because her hands 
are struggling to get the map shut. 
“Everything’s a national forest,” Sven grumbles, an- 
gling his head as if to peer deeper into the darkness at all 
these black trees. 
“But you can’t do that in the king’s forest, can you?” 
Lotte asks, finally getting the map folded in one of the six 
different ways it’s possible to fold it. 
Sven follows her eyes across Indian Lake. There’s little 
floating pinpoints of light over there that only really come 
into focus when you look into the darkness right beside 
them. 
“Hunh,” he says, Lotte coming up behind him to rest 
her chin on his shoulder, hold his waist in her hands. 
Sven breathes in deep with wonder when the lights 
rearrange themselves, suggesting great yellow necks in 
the inky blackness: strange and massive animals, piecing 
the world together one lakeshore at a time. Then, a ways 
down the shore, a ball of flickering light arcs up into the 
velvety sky and hangs, hangs.
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
  
  export default Chainsaw;
  