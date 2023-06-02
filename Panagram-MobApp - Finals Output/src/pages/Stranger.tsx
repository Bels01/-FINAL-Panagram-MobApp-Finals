import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
    IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Stranger.css';
  import { IonIcon } from '@ionic/react';
  import React, { createRef } from 'react';
  import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
  import { useState } from 'react';
  import { useEffect } from 'react';
  
  function Stranger() {
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
    const imageSrc = document.getElementById('starngers')?.getAttribute('src'); // Get the image source
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
              <a href='library'>
            <IonIcon className='head' color='dark' icon={arrowBack}/>
            </a>
            <IonTitle className='strangertitle'>Stranger in a Strange Land</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="ion-padding" fullscreen>
       <IonImg id='starngers' className='fault' src="assets/img/strange.jpg" alt='My Image'/>
       <IonButton onClick={addToFavorites}>Add to My Favorites</IonButton>
       <br/>
       <br/>
       <IonTitle >&nbsp;  Stranger in a Strange Land</IonTitle>
       <br/>
       <IonLabel className='desc' >Stranger in a Strange Landv is a novel by Robert A. Heinlein. 
       A novel set in the first decades of the twenty-first century. 
        It was published on 1961</IonLabel> <br/> 
        <br/>
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
        <div className='storylstranger'>
          <IonText className='storyline'>
            <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; 
            Humankind sends its first human expedition to Mars. The spaceship's crew arrives on the planet and are 
            never heard from again. Twenty-five years later, another mission is sent, and the child of two of the 
            first ship's crewmembers, who has been born on Mars and raised by the peculiar Martian race, is discovered
             and brought back to Earth. Because of various legal precedents, Valentine Michael Smith, the Man from Mars, 
             is the inheritor to a vast fortune, and because of another precedent known as the Larkin Decision, Mike has 
             a claim to legal ownership of the planet Mars. Therefore he has the potential to be massively influential in
              matters of Earth politics, and he is kept under close guard at a hospital by the leader of Earth's government, 
              Secretary General Joseph Douglas. In the hospital, Mike slowly teaches his body to adapt to the Earth's atmosphere 
              and he begins learning Earth culture and language, which differ enormously from Martian ways of thought..</p>
          <p className='line1'>&nbsp; &nbsp;
          An ambitious reporter, Ben Caxton, believes that Douglas is using Mike as a pawn in his own political power games 
          and may be planning to kill him. Ben enlists his friend and old flame, Jill Boardman, a nurse at the hospital, to help 
          him spy on Mike's treatment at the hospital. When Ben lets on to the authorities that he has a notion of their plans, 
          they kidnap him. Jill sneaks Mike out of the hospital. When police officers try to kidnap them as well, Mike makes the 
          officers disappear from existence—one of many psychic powers Mike has learned on Mars.</p>
            </IonText>
            <br/>
            <br/>
            <IonText>
              <p className='line1'><b>Chapter 2</b><br/>
              &nbsp; &nbsp;
              Jill takes Mike to the only man she believes can help them, Jubal Harshaw, a famous doctor, lawyer, writer, 
              and general cultural phenomenon. Jubal lives in a large house with three beautiful secretaries (Anne, Miriam,
               and Dorcas) and two male assistants (Duke and Larry). Jubal agrees to help protect Jill and Mike from the 
               authorities. Mike learns about Earth culture at Jubal's estate, reading everything in Jubal's library and 
               becoming fascinated with Earth religions. The police eventually discover Mike's whereabouts and come to arrest
                Jubal and his coterie, but at the last moment, Jubal is able to get through to Douglas personally and convince 
                him to call off the police. Jubal also gets Douglas to rescue Ben from police captivity. Through legalistic 
                maneuvering and rhetorical brinksmanship, Jubal is able to defuse Mike's political importance, arguing that
                 Mike cannot be the legal owner of Mars since the Martian race inhabited it long before Mike was born. Jubal 
                 makes Douglas an ally by convincing him to become overseer of Mike's vast personal fortune.
              </p>
            </IonText>
            <IonText>
              <p className='line1'>
              Following up on Mike's fascination with religion, he and Jubal and Jill go to visit the headquarters
               of a religious group called the Fosterites. The Fosterites have aggressively built a massive following, 
               in part by enlisting entertainers, such as football players and strippers, to deliver their message, 
               and incorporating vices like gambling into their organization. The Fosterite Supreme Bishop, Digby, hopes
              to enlist Mike to lend his celebrity to their cause, but, when they are alone in a room together, a conflict arises and Mike makes Digby disappear.
              </p>
              
            </IonText>
           
          </div>  
          <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
        </IonContent>
      </IonPage>
    );
  };
  
  export default Stranger;
  