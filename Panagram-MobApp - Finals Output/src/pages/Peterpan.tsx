import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
  IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Peterpan.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Peterpan() {
  const contentRef = createRef<HTMLIonContentElement>();

  function scrollToBottom() {
    contentRef.current?.scrollToBottom(4000);
  }

  function scrollToTop() {
    contentRef.current?.scrollToTop(4000);
  }

  const [favorites, setFavorites] = useState<string[]>([]); // Array to store favorite images

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = () => {
    const imageSrc = document.getElementById('peterpan')?.getAttribute('src'); // Get the image source
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
        <IonTitle className='petertitle'>Peter Pan</IonTitle>
        </div>
      </IonToolbar>
    </IonHeader>
    <IonContent ref={contentRef} className="ion-padding" fullscreen>
   <IonImg id='peterpan' className='fault' src="assets\img\peterpan.jpg"/>
   <br/>
   <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
   <br/>
   <br/>
   <IonTitle className='petermanbook'>&nbsp;  Peter Pan </IonTitle>
   <br/>
   <IonLabel className='desc' >Peter Pan is a novel by J.M. Barrie</IonLabel> <br/>
    <IonLabel className='desc'>A young boy who can fly and never grows up, Peter Pan spends his never-ending childhood having adventures on the mythical island of Neverland as the leader of the Lost Boys, interacting with fairies, pirates, mermaids, Native Americans, and occasionally ordinary children from the world outside Neverland.</IonLabel> <br/>
    <IonLabel className='desc'>It was published on December 27, 1904</IonLabel> <br/> <br/>
    <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
    <div className='peterpanstory'>
      <IonText className='storyline'>
        <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp;All children, except one, grow up. They soon know that they will grow up, 
and the way Wendy knew was this. One day when she was two years old 
she was playing in a garden, and she plucked another flower and ran 
with it to her mother. I suppose she must have looked rather delightful, 
for Mrs. Darling put her hand to her heart and cried, "Oh, why can't you 
remain like this for ever!" This was all that passed between them on the 
subject, but henceforth Wendy knew that she must grow up. You always 
know after you are two. Two is the beginning of the end.
Of course they lived at 14 [their house number on their street], and until 
Wendy came her mother was the chief one. She was a lovely lady, with a 
romantic mind and such a sweet mocking mouth. Her romantic mind 
was like the tiny boxes, one within the other, that come from the puzzling 
East, however many you discover there is always one more; and her 
sweet mocking mouth had one kiss on it that Wendy could never get, 
though there it was, perfectly conspicuous in the right-hand corner. 
The way Mr. Darling won her was this: the many gentlemen who had 
been boys when she was a girl discovered simultaneously that they loved 
her, and they all ran to her house to propose to her except Mr. Darling, 
who took a cab and nipped in first, and so he got her. He got all of her, 
except the innermost box and the kiss. He never knew about the box, 
and in time he gave up trying for the kiss. Wendy thought Napoleon 
could have got it, but I can picture him trying, and then going off in a 
passion, slamming the door. 
Mr. Darling used to boast to Wendy that her mother not only loved him 
but respected him. He was one of those deep ones who know about 
stocks and shares. Of course no one really knows, but he quite seemed 
to know, and he often said stocks were up and shares were down in a 
way that would have made any woman respect him.
</p>
      <p className='line1'>&nbsp; &nbsp; 
        </p>
        </IonText>
        <IonText>
          <p className='line1'><b>Chapter 2</b><br/>
          &nbsp; &nbsp;Mrs. Darling screamed, and, as if in answer to a bell, the door opened, 
and Nana entered, returned from her evening out. She growled and 
sprang at the boy, who leapt lightly through the window. Again Mrs. 
Darling screamed, this time in distress for him, for she thought he was 
killed, and she ran down into the street to look for his little body, but it 
was not there; and she looked up, and in the black night she could see 
nothing but what she thought was a shooting star. 
She returned to the nursery, and found Nana with something in her 
mouth, which proved to be the boy's shadow. As he leapt at the window 
Nana had closed it quickly, too late to catch him, but his shadow had not 
had time to get out; slam went the window and snapped it off. 
You may be sure Mrs. Darling examined the shadow carefully, but it was 
quite the ordinary kind. 
Nana had no doubt of what was the best thing to do with this shadow. 
She hung it out at the window, meaning "He is sure to come back for it; 
let us put it where he can get it easily without disturbing the children." 
But unfortunately Mrs. Darling could not leave it hanging out at the 
window, it looked so like the washing and lowered the whole tone of the 
house. She thought of showing it to Mr. Darling, but he was totting up 
winter great-coats for John and Michael, with a wet towel around his 
head to keep his brain clear, and it seemed a shame to trouble him; 
besides, she knew exactly what he would say: "It all comes of having a 
dog for a nurse." 
She decided to roll the shadow up and put it away carefully in a drawer, 
until a fitting opportunity came for telling her husband. Ah me! 
The opportunity came a week later, on that never-to-be-forgotten Friday. 
Of course it was a Friday. 
"I ought to have been specially careful on a Friday," she used to say 
afterwards to her husband, while perhaps Nana was on the other side of 
her, holding her hand.
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

export default Peterpan;
