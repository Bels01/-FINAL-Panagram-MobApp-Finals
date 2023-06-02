import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
  IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Tab3() {
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
    const imageSrc = document.getElementById('fault')?.getAttribute('src'); // Get the image source
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
          <IonIcon className='head' color='dark' icon={arrowBack}/>
          </Link>
          <IonTitle className='allicetitle'>Alice in Wonderland</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="ion-padding" fullscreen>
     <IonImg className='galaxy' src="assets\img\book5.jpg"/>
     <br/>
     <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
     <br/>
     <br/>
     <IonTitle className='galaxybook'>&nbsp;  Alice in Wonderland </IonTitle>
     <br/>
     <IonLabel className='desc' >A young girl when she first visited magical Underland, Alice Kingsleigh (Mia Wasikowska) 
     is now a teenager with no memory of the place -- except in her dreams. Her life takes a turn for the unexpected when, 
     at a garden party for her fiance and herself, she spots a certain white rabbit and tumbles down a hole after him. 
     Reunited with her friends the Mad Hatter (Johnny Depp), the Cheshire Cat and others, Alice learns it is her destiny 
     to end the Red Queen's (Helena Bonham Carter) reign of terror.</IonLabel> <br/> <br/>
      <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
      <div className='Story'>
        <IonText className=''>
          <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; 

          Down the Rabbit-Hole<br/>
Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”
So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.
There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.
In another moment down went Alice after it, never once considering how in the world she was to get out again.
The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.
Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it.
“Well!” thought Alice to herself, “after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!” (Which was very likely true.)
Down, down, down. Would the fall never come to an end? “I wonder how many miles I’ve fallen by this time?” she said aloud. “I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think—” (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a very good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) “—yes, that’s about the right distance—but then I wonder what Latitude or Longitude I’ve got to?” (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)
Presently she began again. “I wonder if I shall fall right through the earth! How funny it’ll seem to come out among the people that walk with their heads downward! The Antipathies, I think—” (she was rather glad there was no one listening, this time, as it didn’t sound at all the right word) “—but I shall have to ask them what the name of the country is, you know. Please, Ma’am, is this New Zealand or Australia?” (and she tried to curtsey as she spoke—fancy curtseying as you’re falling through the air! Do you think you could manage it?) “And what an ignorant little girl she’ll think me for asking! No, it’ll never do to ask: perhaps I shall see it written up somewhere.”
Down, down, down. There was nothing else to do, so Alice soon began talking again. “Dinah’ll miss me very much to-night, I should think!” (Dinah was the cat.) “I hope they’ll remember her saucer of milk at tea-time. Dinah my dear! I wish you were down here with me! There are no mice in the air, I’m afraid, but you might catch a bat, and that’s very like a mouse, you know. But do cats eat bats, I wonder?” And here Alice began to get rather sleepy, and went on saying to herself, in a dreamy sort of way, “Do cats eat bats? Do cats eat bats?” and sometimes, “Do bats eat cats?” for, you see, as she couldn’t answer either question, it didn’t much matter which way she put it. She felt that she was dozing off, and had just begun to dream that she was walking hand in hand with Dinah, and saying to her very earnestly, “Now, Dinah, tell me the truth: did you ever eat a bat?” when suddenly, thump! thump! down she came upon a heap of sticks and dry leaves, and the fall was over.
Alice was not a bit hurt, and she jumped up on to her feet in a moment: she looked up, but it was all dark overhead; before her was another long passage, and the White Rabbit was still in sight, hurrying down it. There was not a moment to be lost: away went Alice like the wind, and was just in time to hear it say, as it turned a corner, “Oh my ears and whiskers, how late it’s getting!” She was close behind it when she turned the corner, but the Rabbit was no longer to be seen: she found herself in a long, low hall, which was lit up by a row of lamps hanging from the roof.
       &nbsp; &nbsp;There were doors all round the hall, but they were all locked; and when Alice had been all the way down one side and up the other, trying every door, she walked sadly down the middle, wondering how she was ever to get out again.
Suddenly she came upon a little three-legged table, all made of solid glass; there was nothing on it except a tiny golden key, and Alice’s first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them. However, on the second time round, she came upon a low curtain she had not noticed before, and behind it was a little door about fifteen inches high: she tried the little golden key in the lock, and to her great delight it fitted!
Alice opened the door and found that it led into a small passage, not much larger than a rat-hole: she knelt down and looked along the passage into the loveliest garden you ever saw. How she longed to get out of that dark hall, and wander about among those beds of bright flowers and those cool fountains, but she could not even get her head through the doorway; “and even if my head would go through,” thought poor Alice, “it would be of very little use without my shoulders. Oh, how I wish I could shut up like a telescope! I think I could, if I only knew how to begin.” For, you see, so many out-of-the-way things had happened lately, that Alice had begun to think that very few things indeed were really impossible.</p>
          </IonText>
          <br/>
          <br/>
          <IonText>
            <p className='line1'><b>Chapter 2</b><br/>
            &nbsp; &nbsp;The Pool of Tears<br/>
“Curiouser and curiouser!” cried Alice (she was so much surprised, that for the moment she quite forgot how to speak good English); 
“now I’m opening out like the largest telescope that ever was! Good-bye, feet!” (for when she looked down at her feet, they seemed 
to be almost out of sight, they were getting so far off). “Oh, my poor little feet, I wonder who will put on your shoes and stockings 
for you now, dears? I’m sure I shan’t be able! I shall be a great deal too far off to trouble myself about you: you must manage the 
best way you can;—but I must be kind to them,” thought Alice, “or perhaps they won’t walk the way I want to go! Let me see: I’ll give 
them a new pair of boots every Christmas. ”And she went on planning to herself how she would manage it. “They must go by the carrier,” 
she thought; “and how funny it’ll seem, sending presents to one’s own feet! And how odd the directions will look!
            </p>
          </IonText>
          <IonText>
            <p className='line1'>
            Oh dear, what nonsense I’m talking!”

Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little 
golden key and hurried off to the garden door. Poor Alice! It was as much as she could do, lying down on one side, to look through into the 
garden with one eye; but to get through was more hopeless than ever: she sat down and began to cry again. “You ought to be ashamed of yourself,” 
said Alice, “a great girl like you,” (she might well say this), “to go on crying in this way! Stop this moment, I tell you!” But she went on all 
the same, shedding gallons of tears, until there was a large pool all round her, about four inches deep and reaching half down the hall.
After a time she heard a little pattering of feet in the distance, and she hastily dried her eyes to see what was coming. It was the White 
Rabbit returning, splendidly dressed, with a pair of white kid gloves in one hand and a large fan in the other: he came trotting along in
 a great hurry, muttering to himself as he came, “Oh! the Duchess, the Duchess! Oh! won’t she be savage if I’ve kept her waiting!” Alice 
 felt so desperate that she was ready to ask help of any one; so, when the Rabbit came near her, she began, in a low, timid voice, “If you please,
 sir—” The Rabbit started violently, dropped the white kid gloves and the fan, and skurried away into the darkness as hard as he could go.
Alice took up the fan and gloves, and, as the hall was very hot, she kept fanning herself all the time she went on talking: “Dear, dear! 
How queer everything is to-day! And yesterday things went on just as usual. I wonder if I’ve been changed in the night? Let me think: was 
I the same when I got up this morning? I almost think I can remember feeling a little different. But if I’m not the same, the next question is, 
Who in the world am I? Ah, that’s the great puzzle!” And she began thinking over all the children she knew that were of the same age as herself,
 to see if she could have been changed for any of them.
            </p>
            
          </IonText>
         
        </div>  
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
