import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonButton, IonText, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Faultinourstar.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';




function Faultinourstar() {
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
    const imageSrc = document.getElementById('fault')?.getAttribute('src'); // Get the image source
    if (imageSrc && !favorites.includes(imageSrc)) {
      const updatedFavorites = [...favorites, imageSrc];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <IonPage className='body'>
    <IonHeader className='head2' >
      <IonToolbar color='translucent'>
         <div className='header'>
          <Link to='tab2'>
        <IonIcon className='head' color='dark' icon={arrowBack}/>
        </Link>
        <IonTitle className='faulttitle'>The Fault in our stars</IonTitle>
        </div>
      </IonToolbar>
    </IonHeader>
    <IonContent ref={contentRef} className="ion-padding" fullscreen>
   <IonImg id='fault' className='fault' src="assets\img\book2.jpg"/>
   <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
   <br/>
   <br/>
   <IonTitle >&nbsp;  The Fault in our star</IonTitle>
   <br/>
   <IonLabel className='desc' >The Fault in Our Stars is a novel by John Green.</IonLabel> <br/>
    <IonLabel className='desc'>It is his fourth solo novel, and sixth novel overall.</IonLabel> <br/>
    <IonLabel className='desc'>It was published on January 10, 2012</IonLabel> <br/> <br/>
    <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
    <div className='storyll'>
      <IonText className='storyline'>
        <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; Late  in  the  winter of  my  seventeenth year,  my  mother decided I  wasdepressed, presumably because I rarely left the house, spent quite a lot oftime  in  bed,  read  the  same  book  over  and  over,  ate  infrequently,  anddevoted quite a bit of my abundant free time to thinking about death.Whenever you  read  a  cancer booklet or  website or  whatever,  theyalways list  depression among the  side  effects  of  cancer.  But,  in  fact,depression is not a side effect of cancer. Depression is a side effect of dying.(Cancer is also a side effect of dying. Almost everything is, really.) But mymom  believed I  required treatment,  so  she  took  me  to  see  my  RegularDoctor Jim, who agreed that I was veritably swimming in a paralyzing andtotally clinical depression, and that therefore my meds should be adjustedand also I should attend a weekly Support Group.This Support Group featured a rotating cast of characters in variousstates of tumor-driven unwellness. Why did the cast rotate? A side effect ofdying.The Support Group, of course, was depressing as hell. It met everyWednesday in the basement of a stone-walled Episcopal church shaped likea cross. We all sat in a circle right in the middle of the cross, where the twoboards would have met, where the heart of Jesus would have been.I noticed this because Patrick, the Support Group Leader and onlyperson over eighteen in the room, talked about the heart of Jesus everyfreaking meeting, all about how we, as young cancer survivors, were sittingright in Christ’s very sacred heart and whatever.So here’s how it went in God’s heart: The six or seven or ten of uswalked/wheeled in, grazed at a decrepit selection of cookies and lemonade,sat down in the Circle of Trust, and listened to Patrick recount for thethousandth time his depressingly miserable life story—how he had cancer
in his balls and they thought he was going to die but he didn’t die and nowhere he is, a full-grown adult in a church basement in the 137th nicest cityin America, divorced, addicted to video games, mostly friendless, eking outa meager living by exploiting his cancertastic past, slowly working his waytoward a  master’s  degree that  will  not  improve his  career  prospects,waiting, as we all do, for the sword of Damocles to give him the relief thathe escaped lo those many years ago when cancer took both of his nuts butspared what only the most generous soul would call his life.AND YOU TOO MIGHT BE SO LUCKY!</p>
      <p className='line1'>&nbsp; &nbsp;</p>
        </IonText>
        <br/>
        <br/>
        <IonText>
          <p className='line1'><b>Chapter 2</b><br/>
          &nbsp; &nbsp;Augustus Waters  drove horrifically.  Whether stopping or  starting,everything happened with a tremendous JOLT. I flew against the seat belt ofhis Toyota SUV each time he braked, and my neck snapped backward eachtime he hit the gas. I might have been nervous—what with sitting in the carof a strange boy on the way to his house, keenly aware that my crap lungscomplicate efforts to fend off unwanted advances—but his driving was soastonishingly poor that I could think of nothing else.We’d gone perhaps a mile in jagged silence before Augustus said, “Ifailed the driving test three times.”“You don’t say.”He laughed, nodding. “Well, I can’t feel pressure in old Prosty, and Ican’t get the hang of driving left-footed. My doctors say most amputees candrive with no problem, but . . . yeah. Not me. Anyway, I go in for my fourthdriving test, and it goes about like this is going.” A half mile in front of us,a light turned red. Augustus slammed on the brakes, tossing me into thetriangular embrace of the seat belt. “Sorry. I swear to God I am trying to begentle. Right, so anyway, at the end of the test, I totally thought I’d failedagain, but the instructor was like, ‘Your driving is unpleasant, but it isn’ttechnically unsafe.’”“I’m not sure I agree,” I said. “I suspect Cancer Perk.” Cancer Perksare  the  little  things cancer kids  get  that  regular kids  don’t:  basketballssigned by sports heroes, free passes on late homework, unearned driver’slicenses, etc.“Yeah,” he said. The light turned green. I braced myself. Augustusslammed the gas.“You know they’ve got hand controls for people who can’t use theirlegs,” I pointed out
          </p>
        </IonText>
        <IonText>
          <p className='line1'>
          
          </p>
          
        </IonText>
       
      </div>  
      <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
      <br/>
      <br/> 
    </IonContent>
  </IonPage>
  );
};

export default Faultinourstar;
