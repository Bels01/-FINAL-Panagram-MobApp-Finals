import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
    IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Bookofaccidents.css';
  import { IonIcon } from '@ionic/react';
  import React, { createRef } from 'react';
  import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
  import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
  
  function Bookofaccidents() {
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
    const imageSrc = document.getElementById('accidentsstory')?.getAttribute('src'); // Get the image source
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
            <IonTitle className='vtitle'>The Book of Accidents</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="ion-padding" fullscreen>
       <IonImg id='accidentsstory' className='fault' src="assets\img\thebookofaccidents.jpg"/>
       <br/>
       <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
       <br/>
       <br/>
       <IonTitle className='accidentsbook'>&nbsp;  The Book of Accidents</IonTitle>
       <br/>
       <IonLabel className='desc' >The Book of Accidents is a novel by Chuck Wendig.
        The Book of Accidents plays on the horrors of the mind and the horrors of the unknown, but much more importantly, it is a story about family and the invisible ties that bind individuals to each other and their past events. Nate has a great fear of passing the violence of his childhood on to Oliver through his actions.<br/>
        It was published on July 20, 2021</IonLabel> <br/> <br/>
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
        <div className='accidentsstory'>
          <IonText className=''>
            <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; The boy, fifteen, knelt on the ground, his chin against his chest, the soft undersides of his forearms pressing into his ears even as his fingers dug into the thatch of messy hair at the back of his head. His ears rang sharply—not the tolling of a bell but a shrill whine, 
            like that of a dental drill. To one side of him: yellow lockers. To the other: a water fountain. Above: a waterfall of bright fluorescence. Somewhere ahead were two gunshots, bang, bang. Each made his heart jump. Somewhere behind him were the murmur and rustle of students moving from classroom to classroom, seeking safety. Oliver
             imagined them dead. He imagined his teachers dead. Blood on linoleum. Brains on chalkboard. He imagined weeping parents on the news, and the suicides of survivors, and the thoughts and prayers of uncaring politicians—he could see the pain like a little ripple that became a wave, that met other waves and became tsunamis roaring back and forth over people until all were drowned underneath.

A hand grasped his shoulder and shook him. A word spoken as if through a fishbowl—his name. Someone was saying his name. “Olly. Oliver. Olly!” He gently rocked himself back on his ankles, sitting partly upright. It was Mr. Partlow, his BioSci teacher. “Hey. Hey, lockdown drill’s almost over, Oliver. You okay? Come on, kiddo, let’s get you—”

But then the teacher let go and took a half step back. Mr. Partlow stared down at the floor—no, not at the floor. At Oliver. Oliver took a look, too. His crotch was wet. Fingers of liquid were spreading down his pant legs. Ahead, he saw a few students gather and stare. Landon Gray, who sat behind him in homeroom, looked sad. Amanda McInerney—who was in all the plays, and chorus, and student council—made a gross face and giggled.

Mr. Partlow helped him stand up and took him away. Oliver wiped tears from his face, tears he didn’t even know he’d spilled.</p>
          <p className='line1'>&nbsp; &nbsp;</p>
            </IonText>
            <br/>
            <br/>
            <IonText>
              <p className='line1'><b>Chapter 2</b><br/>
              &nbsp; &nbsp;That same day, Nate sat in a lawyer’s office in Langhorne. The lawyer was round and grub white, like the inside of a cut potato. In the window of the office, an AC unit grumbled and growled, so that the man had to raise his voice in order to be heard.
“Thank you for coming,” the lawyer, Mr. Rickert, said.
“Uh-huh.” Nate tried to keep his hands from balling into fists. Tried, and failed.
“Your father is sick,” the lawyer said.
“Good,” Nate answered without hesitation.
Rickert leaned forward.
“It’s cancer. Colon cancer.”
“Fine.”
“He’ll be dead soon. Very soon. He’s on hospice.”
Nate shrugged. “Okay.”
“Okay,” the lawyer repeated, and Nate couldn’t tell if the man was surprised by his reaction—or prepared for it. “Mr. Graves—”
“I know you expect me to be broken up about all this, but I’m not. Not one little bit. My father was—or, is, I guess—a tremendous piece of garbage. I have no love for him. I have only hatred and disdain for that monster masquerading as a man, and truth be told, I’ve been dreaming of this day for the better part of twenty years, maybe longer. I’ve imagined how it would go. I’ve prayed to whatever god that would listen that my father, the piece of shit that he is, would go painfully and miserably, that it wouldn’t be fast, wouldn’t be a quick sprint to the end, but, rather, a slow, stumbling marathon, a . . . a clumsy run where he’s painting the walls with his lung blood, where he’s drowning in his own fluids, where he’s gotta wear some, some bag on his side to contain his own f—his own mess, a bag that breaks on him or that pops out of its port every time he moves to adjust his ruined, dying body. You know what? I was hoping it’d be cancer. A crawling, steady cancer, too, not fast like pancreatic. Something that eats him up from the inside sure as he ate up our family. Cancer for cancer, tit for tat. I figured it’d be lung, given the way he smoked. Or liver, given the drink. But colon cancer? I’ll take colon. He was . . . he was always full of shit, so that is a fitting end for that semi-human sack of septic excrement.”
The lawyer blinked. Silence passed between them. Rickert pursed his lips. “Are you done monologuing?”

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
  
  export default Bookofaccidents;
  