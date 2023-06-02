  import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
    IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
  import ExploreContainer from '../components/ExploreContainer';
  import './Papertowns.css';
  import { IonIcon } from '@ionic/react';
  import React, { createRef } from 'react';
  import { useEffect } from 'react';
  import { useState } from 'react';
  import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
  import { Link } from 'react-router-dom';
  
  function Papertowns() {
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
            <IonTitle className='vtitle'>Paper Towns</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="ion-padding" fullscreen>
       <IonImg id='paper' className='fault' src="assets\img\book4.jpg"/>
       <br/>
       <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
       <br/>
       <br/>
       <IonTitle >&nbsp;  Paper Towns</IonTitle>
       <br/>
       <IonLabel className='desc' >Paper Towns is a novel by John Green.</IonLabel> <br/>
        <IonLabel className='desc'>Paper Towns is a coming of age story set in Orlando, Florida. It focuses on Quentin, a young man about to embark on his adult life, and the adventure he and his friends, Ben and Radar, have their senior year that centers on the disappearance of their classmate Margo Roth Spiegelman.</IonLabel> <br/>
        <IonLabel className='desc'>It was published on January 10, 2012</IonLabel> <br/> <br/>
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
        <div className='papertownsstory'>
          <IonText className=''>
            <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp;The longest day of my life began tardily. I woke up late, took too long inthe shower, 
            and ended up having to enjoy my breakfast in the passengerseat of my mom’s minivan at 7:17 that Wednesday morning.I usually got a ride to school 
            with my best friend, Ben Starling, but Benhad gone to school on time, making him useless to me. “On time” for uswas  thirty  minutes  before  
            chool  actually  started,  because  the  half  hourbefore  the  first  bell  was  the  highlight  of  our  social  calendars:  standingoutside 
            the side door that led into the band room and just talking. Most ofmy friends were in band, and most of my free time during school was spentwithin 
            twenty feet of the band room. But I was not in the band, because Isuffer from the kind of tone deafness that is generally associated with actualdeafness. 
            I was going to be twenty minutes late, which technically meantthat I’d still be ten minutes early for school itself.As she drove, Mom was asking me about 
            classes and finals and prom.“I don’t believe in prom,” I reminded her as she rounded a corner. Iexpertly angled my raisin bran to accommodate the g-forces. 
            I’d done thisbefore.“Well, there’s no harm in just going with a friend. I’m sure you couldask Cassie Hiney.” And I could have asked Cassie Hiney, who was 
            actuallyperfectly  nice  and  pleasant  and  cute,  despite  having  a  fantasticallyunfortunate last name.“It’s not just that I don’t like prom. I also don’t 
            like people who likeprom,”  I  explained,  although  this  was,  in  point  of  fact,  untrue.  Ben  wasabsolutely gaga over the idea of going.Mom turned into 
            school, and I held the mostly empty bowl with bothhands as we drove over a speed bump. I glanced over at the senior parkinglot. Margo Roth Spiegelman’s silver 
            Honda was parked in its usual spot.Mom pulled the minivan into a cul-de-sac outside the band room and kissedme  on  the  cheek.  I  could  see  Ben  and  my  
            other  friends  standing  in  asemicircle.I walked up to them, and the half circle effortlessly expanded to includeme.  They  were  talking  about  my  ex-girlfriend  
            Suzie  Chung,  who  played cellod was apparently creating quite a stir by dating a baseball playernamed Taddy Mac. Whether this was his given name, I did not know. 
            But atany  rate,  Suzie  had  decided  to  go  to  prom  with  Taddy  Mac.  Anothercasualty.</p>
          <p className='line1'>&nbsp; &nbsp;</p>
            </IonText>
            <IonText>
              <p className='line1'><b>Chapter 2</b><br/>
              &nbsp; &nbsp;“Bro,”  said  Ben,  standing  across  from  me.  He  nodded  his  head  andturned  around.  
              I  followed  him  out  of  the  circle  and  through  the  door.  Asmall, olive-skinned creature who had 
              hit puberty but never hit it very hard,Ben had been my best friend since fifth grade, when we both finally 
              ownedup to the fact that neither of us was likely to attract anyone else as a bestfriend. Plus, he tried hard, 
              and I liked that—most of the time.“How  ya  doin’?”  I  asked.  We  were  safely  inside,  everyone  else’sconversations 
              making ours inaudible.“Radar is going to prom,” he said morosely. Radar was our other bestfriend. We called him Radar 
              because he looked like a little bespectacled guycalled  Radar  on  this  old  TV  show M*A*S*H,  except  1.  The  TV  
              Radarwasn’t black, and 2. At some point after the nicknaming, our Radar grewabout  six  inches  and  started  wearing  
              contacts,  so  I  suppose  that  3.  Heactually didn’t look like the guy on M*A*S*H at all, but 4. With three and ahalf 
              weeks left of high school, we weren’t very well going to renicknamehim.“That girl Angela?” I asked. Radar never told us 
              anything about his lovelife, but this did not dissuade us from frequent speculation.Ben nodded, and then said, “You know 
              my big plan to ask a freshbunnyto  prom  because  they’re  the  only  girls  who  don’t  know  the  Bloody  Benstory?” 
              I nodded.“Well,”  Ben  said,  “this  morning  some  darling  little  ninth-gradehoneybunny came up to me and asked me if 
              I was Bloody Ben, and I beganto explain that it was a kidney infection, and she giggled and ran away. Sothat’s out.”In tenth 
              grade, Ben was hospitalized for a kidney infection, but BeccaArrington, Margo’s best friend, started a rumor that the real 
              reason he hadblood  in  his  urine  was  due  to  chronic  masturbation.  Despite  its  medicalimplausibility, this story 
              had haunted Ben ever since. “That sucks,” I said.Ben  started  outlining  plans  for  finding  a  date,  but  I  was  only  
              halflistening, because through the thickening mass of humanity crowding thehallway, I could see Margo Roth Spiegelman. 
              She was next to her locker,standing beside her boyfriend, Jase. She wore a white skirt to her knees and a blue print top. 
              </p>
            </IonText>
           
          </div>  
          <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
        </IonContent>
      </IonPage>
    );
  };
  
  export default Papertowns;
  