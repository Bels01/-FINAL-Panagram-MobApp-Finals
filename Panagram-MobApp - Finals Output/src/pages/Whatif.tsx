import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
    IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Whatif.css';
  import { IonIcon } from '@ionic/react';
  import React, { createRef } from 'react';
  import { useEffect } from 'react';
  import { useState } from 'react';
  import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
  import { Link } from 'react-router-dom';
  
  function Papertowns() {
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
      const imageSrc = document.getElementById('paper')?.getAttribute('src'); // Get the image source
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
            <IonTitle className='vtitle'>What If.... We never met?</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="ion-padding" fullscreen>
       <IonImg id='paper' className='fault' src="assets\panagram books\what-if.webp"/>
       <br/>
       <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
       <br/>
       <br/>
       <IonTitle className='bookwhatif' >&nbsp;  What If.... We never met?</IonTitle>
       <br/>
       <IonLabel className='desc' >Paper Towns is a novel by John Green. <br/>
            Paper Towns is a coming of age story set in Orlando, Florida. It focuses on Quentin, 
            a young man about to embark on his adult life, and the adventure he and his friends, 
            Ben and Radar, have their senior year that centers on the disappearance of their 
            classmate Margo Roth Spiegelman.</IonLabel><br/>
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
        <div className='whatifstory'>
          <IonText className=''>
          <p className='line1'><b>Chapter 1 </b><br/> Prologue<br/>
            Sunday
            "Have you guys ever thought? What if we never knew each other?"
            Derek spoke out loud. Taking a sip from the bottle in his hand, he turned to look at his friends.
            "But we did know each other. We were classmates, dude." Kek responded while staring straight ahead 
            at the group of youngsters playing basketball on the green, lush field. "No, but, like, what if we 
            never met each other? What if we never became friends ... after you know ..." Derek trailed off. 
            He didn't know whether he should continue his line of thought out loud, whether it was appropriate 
            to bring up the incident again after all these years. From the corner of his eye, he could see Etelvina 
            giving him a pointed look.Everything went silent. The kids playing basketball went off for a water break. 
            The chirping of the birds came to a standstill. A thin air of tension seemed to have overshadowed the group 
            of friends sitting on the benches. Leah was the first who sensed it and decided to break the air of uncomfortable 
            silence lingering over them. "I see, you regret meeting us, and so you dream of alternate realities wherein you 
            could get rid of us, is that it? "Etelvina stiffened. Kek nervously gulped down his drink. Derek tensed up. 
            He slowly turned to look at Leah, who was sitting on the opposite end of the bench. A hint of accusation could 
            be detected in her words. From her tone, he knew he messed up. Again. "That is not what I meant", Derek tried to 
            clarify. "I was just thinking, not hoping, that, you known, what if you, we..." He was rambling now. One. Two. Three.
            It only took her three seconds before a laugh burst out of Leah's lips. The three of them turned to look at her, 
            only to witness a huge smile covering her tanned face and round eyes. “You should have seen your faces, especially Dek!" 
            she laughed again. "It's not funny!" Derek exclaimed as loud as he could. His hands supported his chest as he feigned pain. 
            Kek laughed along with Leah, not before he sent a light punch to his friend's shoulder. Etelvina simply rolled her eyes at the 
            absurdity of Derek's question. "Wehther you like it or not, we are stuck with one another."  </p> <br/>
          <p className='line1'>&nbsp; &nbsp;</p>
            </IonText>
            <IonText>
              <p className='line1'><b></b><br/>
                &nbsp; &nbsp;"No wonder your last paper went so awful, you were keeping yourself busy with all sorts of questions." 
                Keke chirped in, along with Etelvina's comment. "Really funny," Derek continued, "no, but honestly guys, we have gone 
                through so much together, what if in another world we weren't there for one another, what then?" The group of friends 
                stood up from the bench and started to make their way to Keke's recent, barn red shade, limited edition, sports car.
               "Then I suppose we would be leading a more relaxed life without you" Etelvina commented with a giggle and dashed past 
               Derek before he could get to her. A tall silhouette could be seen fidgeting and taking long strides around the room 
               from the open window. After about ten minutes of anxiously walking around, the shadow came to a stand. Turning on the 
               lights, she took off her purple Burberry coat and placed it on the desk nearby. She pulled out a chair and sat down, 
               waiting for the computer to turn on. Once the screen lighted up, she opened her mailbox and re-read the recent mail 
               she had received.
                </p>
            </IonText>
          </div>  
          <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
        </IonContent>
      </IonPage>
    );
  };
  
  export default Papertowns;
  