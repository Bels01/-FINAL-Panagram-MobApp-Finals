import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
    IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Eragon.css';
  import { IonIcon } from '@ionic/react';
  import React, { createRef } from 'react';
  import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
  
  function Eragon() {
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
    const imageSrc = document.getElementById('bookeragon')?.getAttribute('src'); // Get the image source
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
            <IonIcon className='head' icon={arrowBack}/>
            </Link>
            <IonTitle className='eragontitle'>Eragon</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="ion-padding" fullscreen>
       <IonImg id='bookeragon' className='fault' src="assets\img\book3.png"/>
       <br/>
       <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
       <br/>
       <br/>
       <IonTitle  className='bookeragon' >&nbsp;  Eragon</IonTitle>
       <br/>
       <IonLabel className='desc' >Eragon is a novel by book3 copy.png.</IonLabel> <br/>
        <IonLabel className='desc'>Eragon is an orphaned farm boy whose destiny is sealed forever when a mystic stone chooses him for its keeper. This is no ordinary stone, this is the last surviving egg of the dragon race. Eragon is now the new Dragon Rider, the boy who will be a savior to the repressed peoples of the Kingdom.</IonLabel> <br/>
        <IonLabel className='desc'>It was published on January 8, 2007</IonLabel> <br/> <br/>
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
        <div className='eragonstory'>
          <IonText className=''>
            <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; Wind  howled through the  night, carrying a  scent that  would change theworld. 
            A tall Shade lifted his head and sniffed the air. He looked humanexcept for his crimson hair and maroon eyes.He blinked in surprise. 
            The message had been correct: they were here. Orwas it a trap? He weighed the odds, then said icily, “Spread out; hide behindtrees and 
            bushes. Stop whoever is coming . . . or die.”Around him  shuffled  twelve Urgals  with  short swords and  round ironshields painted with 
            black symbols. They resembled men with bowed legsand thick, brutish arms made for crushing. A pair of twisted horns grewabove their small 
            ears. The monsters hurried into the brush, grunting as theyhid. Soon the rustling quieted and the forest was silent again.The Shade peered 
            around a thick tree and looked up the trail. It was toodark for  any  human to  see,  but  for  him  the  faint moonlight  was  likesunshine
            streaming between the trees; every detail was clear and sharp tohis searching gaze. He remained unnaturally quiet, a long pale sword in hishand.
             A  wire-thin scratch curved down the  blade. The  weapon was  thinenough to slip between a pair of ribs, yet stout enough to hack through thehardest armor.
          The Urgals could not see as well as the Shade; they groped like blindbeggars, fumbling with their weapons. An owl screeched, cutting throughthe  silence. 
          No  one  relaxed until the  bird  flew  past. Then the  monstersshivered in the cold night; one snapped a twig with his heavy boot. TheShade hissed in  anger,  
          and  the  Urgals shrank back, motionless. Hesuppressed his  distaste—they smelled like  fetid meat—and turned away.They were tools, nothing more.</p>
          <p className='line1'>&nbsp; &nbsp;</p>
            </IonText>
            <br/>
            <br/>
            <IonText>
              <p className='line1'><b>Chapter 2</b><br/>
              &nbsp; &nbsp;The Shade forced back his impatience as the minutes became hours. The scent must have wafted far ahead of its owners. He did not let the Urgals getup or warm themselves. He denied himself those luxuries, too, and stayedbehind the tree, watching the trail. Another gust of wind rushed through theforest. The smell was stronger this time. Excited, he lifted a thin lip in asnarl.“Get ready,”  he  whispered, his  whole body vibrating. The  tip  of  hissword moved in small circles. It had taken many plots and much pain tobring himself to this moment. It would not do to lose control now.Eyes brightened under the Urgals’ thick brows, and the creatures grippedtheir weapons tighter. Ahead of them, the Shade heard a clink as somethinghard struck a loose stone. Faint smudges emerged from the darkness andadvanced down the trail.Three white horses with riders cantered toward the ambush, their headsheld high and proud, their coats rippling in the moonlight like liquid silver.On  the  first  horse was  an  elf  with  pointed ears  and  elegantly slantedeyebrows. His build was slim but strong, like a rapier. A powerful bow wasslung on his back. A sword pressed against his side opposite a quiver ofarrows fletched with swan feathers.The last rider had the same fair face and angled features as the other. Hecarried a long spear in his right hand and a white dagger at his belt. A helmof extraordinary craftsmanship, wrought with amber and gold, rested on hishead.

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
  
  export default Eragon;
  