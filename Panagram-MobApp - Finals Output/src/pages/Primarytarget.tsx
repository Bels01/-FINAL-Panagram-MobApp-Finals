import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
  IonPage, IonText, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Primarytarget.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';

function Primarytarget() {
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
    const imageSrc = document.getElementById('primary')?.getAttribute('src'); // Get the image source
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
          <IonIcon className='head' icon={arrowBack}/>
          </a>
          <IonTitle className='vtitle'>Primary Target</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="ion-padding" fullscreen>
     <IonImg id="primary" className='fault' src="assets\panagram books\primary target.jpg" alt='primary'/>
     <IonButton onClick={addToFavorites}>Add to My Favorites</IonButton>
     <br/>
     <br/>
     <IonTitle >&nbsp;  Primary Target</IonTitle>
     <br/>
     <IonLabel className='desc' >The Primary Target is a novel by  Jack Mars.</IonLabel> <br/>
      <IonLabel className='desc'>It is his fourth solo novel, and sixth novel overall.</IonLabel> <br/>
      <IonLabel className='desc'>It was published on October 16th, 2018</IonLabel> <br/> <br/>
      <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
      <div className='Storyprimarytarget'>
        <IonText className='storyline'>
          <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; March 16, 2005
                          2:45 p.m. Afghanistan Time (5:15 a.m. Eastern Daylight Time)
                          Bagram Air Base Parwan Province, Afghanistan
                          "Luke, you don't have to do this," Colonel Don Morris said.
                          Sergeant First Class Luke Stone stood at ease inside Don's office. The office itself was inside a glorified corrugated metal Quonset hut, 
                          not far from where the new runway was going in. The air base was a wonderland of constant sound- there were earth movers digging and paving,
                         there were construction workers hammering together hundreds of plywood B-huts to replace the tents that troops stationed here had previously lived in,
                          and if that wasn't enough, there were Taliban rocket attacks from the surrounding mountains and suicide bombers on motorcycles blowing themselves up at the front gates.</p>
        <p className='line1'>&nbsp; &nbsp;Luke shrugged. His hair was longer than military guidance. He had a three-day growth of beard on his face. He wore a flight suit with no indication of rank on it.
                          "I'm just following orders, sir." Don shook his head. His own flattop haircut was black, shot through with gray and white. His face could have been carved from granite. Indeed, 
                          his entire body could have been. His blue eyes were deep-set and intense. The color of his hair and the lines on his face were the only signs that Don Morris had been alive on Earth for more than fifty-five years.
                          Don was packing the meager contents of his office into boxes. One of the legendary founders of Delta Force was retiring from the United States Army. He had been handpicked to launch and manage a small intelligence 
                          agency in Washington, DC, a semi-autonomous group within the FBI. Don was referring to it as a civilian Delta Force. "Don't you dare call me sir," he said. "And if you're following orders today, then follow this one: 
                          decline the mission." Luke smiled. "I'm afraid you're no longer my commanding officer. Your orders don't carry a lot of weight these days. Sir." Don's eyes met Luke's. He kept them there for a long moment.
                          "It's a deathtrap, son. Two years after the fall of Baghdad, the war effort in Iraq is a total balls-up. Here in God's country, we control to the perimeter of this base, the kandahar airport, downtwon kabul and not a whole
                          lot</p>
          </IonText>
          <br/>
          <br/>
          <IonText>
            <p className='line1'><b>Chapter 2</b><br/>
            &nbsp; &nbsp;I "Gentlemen, this mission is suicide," the man at the front of the room said. "And that's why they send men like us."
                        Luke sat in a folding chair in the drab cinderblock briefing room, twenty-two other men sitting in the chairs around him. They were all Delta Force operators,
                        the best of the best. And the mission, as Luke understood it, was difficult-but not necessarily suicide.
                        The man giving this final briefing was Lieutenant Colonel Morgan Heath, as hands-on and gung-ho a commander as there was. Not yet forty years old, it was clear 
                        that Delta was not the end of the line for Heath. He had rocketed up to his current rank, and his ambitions
                        seemed to point toward a higher profile. Politics, maybe a book deal, maybe a stint on TV as a military expert.
                        Heath was handsome, very fit, and over-the-top eager. That wasn't unusual for a Delta operator. But he also talked a lot. And that wasn't Delta at all.
                        Luke had watched him a week earlier, giving an interview to a reporter and a photographer from Rolling Stone magazine, and walking the guys through the advanced
                         stealth and navigational capabilities of an MH- 53J helicopter-not necessarily classified information, but definitely not the kind of thing you want to share with everyone.
            </p>
          </IonText>
          <IonText>
            <p className='line1'>
            Stone almost called him on it. But didn't. He didn't, not because Heath outranked him that didn't matter in Delta, or shouldn't-but because he could imagine ahead of time Heath's response: 
            "You think the Taliban read American pop magazines, Sergeant?" Now, Heath's presentation was up-to-the-minute technology for ten years earlier, PowerPoint on a white backdrop. A young man in 
            a turban and with a dark beard appeared on the screen. "You all know your man," Heath said. "Abu Mustafa Faraj al-Jihadi was born sometime around 1970.
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

export default Primarytarget;
