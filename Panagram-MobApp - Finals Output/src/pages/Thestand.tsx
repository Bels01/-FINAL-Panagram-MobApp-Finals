import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
    IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
  import './Thestand.css';
  import { IonIcon } from '@ionic/react';
  import React, { createRef } from 'react';
  import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
  
  function Thestand() {
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
    const imageSrc = document.getElementById('thestand')?.getAttribute('src'); // Get the image source
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
            <IonTitle className='vtitle'>The Stand</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="ion-padding" fullscreen>
       <IonImg id='thestand' className='fault' src="assets\img\thestand.jpg"/>
       <br/>
       <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
       <br/>
       <br/>
       <IonTitle >&nbsp;  The Stand</IonTitle>
       <br/>
       <IonLabel className='desc' >The Stand is a novel by Stephen King.</IonLabel> <br/>
        <IonLabel className='desc'>The plot centers on a deadly pandemic of weaponized influenza and its aftermath, in which the few surviving humans gather into factions that are each led by a personification of either good or evil and seem fated to clash with each other.</IonLabel> <br/>
        <IonLabel className='desc'>It was published on October 3, 1978</IonLabel> <br/> <br/>
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
        <div className='storyll'>
          <IonText className='storyline'>
            <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp;Hapscomb’s Texaco sat on Number 93 just north of Arnette, a pissant
  four-street burg about 110 miles from Houston. Tonight the regulars were
  there, sitting by the cash register, drinking beer, talking idly, watching the
  bugs fly into the big lighted sign.
  It was Bill Hapscomb’s station, so the others deferred to him even though
  he was a pure fool. They would have expected the same deferral if they had
  been gathered together in one of their business establishments. Except they
  had none. In Arnette, it was hard times. In 1980 the town had had two
  industries, a factory that made paper products (for picnics and barbecues,
  mostly) and a plant that made electronic calculators. Now the paper factory
  was shut down and the calculator plant was ailing—they could make them a
  lot cheaper in Taiwan, it turned out, just like those portable TVs and
  transistor radios.
  Norman Bruett and Tommy Wannamaker, who had both worked in the
  paper factory, were on relief, having run out of unemployment some time
  ago. Henry Carmichael and Stu Redman both worked at the calculator plant
  but rarely got more than thirty hours a week. Victor Palfrey was retired and
  smoked stinking home-rolled cigarettes, which were all he could afford.
  “Now what I say is this,” Hap told them, putting his hands on his knees
  and leaning forward. “They just gotta say screw this inflation shit. Screw
  this national debt shit. We got the presses and we got the paper. We’re
  gonna run off fifty million thousand-dollar bills and hump them right the
  Christ into circulation.”</p>
          <p className='line1'>&nbsp; &nbsp;</p>
            </IonText>
            <br/>
            <br/>
            <IonText>
              <p className='line1'><b>Chapter 2</b><br/>
              &nbsp; &nbspThere was a long rock pier running out into the Atlantic Ocean from the
  Ogunquit, Maine, town beach. Today it reminded her of an accusatory gray
  finger, and when Frannie Goldsmith parked her car in the public lot, she
  could see Jess sitting out at the end of it, just a silhouette in the afternoon
  sunlight. Gulls wheeled and cried above him, a New England portrait drawn
  in real life, and she doubted if any gull would dare spoil it by dropping a
  splat of white doodoo on Jess Rider’s immaculate blue chambray workshirt.
  After all, he was a practicing poet.
  She knew it was Jess because his ten-speed was bolted to the iron railing
  that ran behind the parking attendant’s building. Gus, a balding, paunchy
  town fixture, was coming out to meet her. The fee for visitors was a dollar a
  car, but he knew Frannie lived in town without bothering to look at the
  RESIDENT sticker on the corner of her Volvo’s windshield. Fran came here a
  lot.
  Sure I do, Fran thought. In fact, I got pregnant right down there on the
  beach, just about twelve feet above the high tide line. Dear Lump: You were
  conceived on the scenic coast of Maine, twelve feet above the high tide line
  and twenty yards east of the seawall. X marks the spot.
  Gus raised his hand toward her, making a peace sign.
  “Your fella’s out on the end of the pier, Miss Goldsmith.”
  “Thanks, Gus. How’s business?”
  He waved smilingly at the parking lot. There were maybe two dozen cars
  in all, and she could see blue and white RESIDENT stickers on most of them.
  “Not much trade this early,” he said. It was June 17. “Wait two weeks
  and we’ll make the town some money.”
  “I’ll bet. If you don’t embezzle it all.”
  Gus laughed and went back inside.
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
  
  export default Thestand;
  