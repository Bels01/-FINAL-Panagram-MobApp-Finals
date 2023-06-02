import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, 
  IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Acourt.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Tab6() {
  const contentRef = createRef<HTMLIonContentElement>();

  function scrollToBottom() {
    contentRef.current?.scrollToBottom(5000);
  }

  function scrollToTop() {
    contentRef.current?.scrollToTop(5000);
  }

  const [favorites, setFavorites] = useState<string[]>([]); // Array to store favorite images

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = () => {
    const imageSrc = document.getElementById('acourtbook')?.getAttribute('src'); // Get the image source
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
          <IonTitle className='acourttitle'>A Court of Thorns and Roses</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} className="ion-padding" fullscreen>
     <IonImg id='acourtbook' className='acourtmain' src="assets\panagram books\ACourtt.jpg"/>
     <IonButton onClick={addToFavorites}><IonIcon icon={heart}></IonIcon>&nbsp;Add to My Favorites</IonButton>
     <br/>
     <br/>
     <IonTitle className='storytitle'>&nbsp; A Court of Thorns and Roses</IonTitle>
     <br/>
     <IonLabel className='desc' >A Court of Thorns and Roses is a young adult high fantasy series by Sarah J. Maas. </IonLabel> <br/>
      <IonLabel className='desc'>The saga begins when Feyre Archeron, a 19-year-old huntress, is kidnapped and brought to the faerie lands of Prythian after she kills a faerie wolf. Her kidnapper is Tamlin, a High Fae and one of the seven High Lords of Prythian.</IonLabel> <br/>
      <IonLabel className='desc'>It was published on May 5, 2015</IonLabel> <br/> <br/>
      <IonButton className='btnslide' color="light" expand="block" onClick={scrollToBottom}>Scroll to bottom</IonButton>
      <div className='acourt'>
        <IonText className=''>
          <p className='line1'><b>Chapter 1 </b><br/> &nbsp; &nbsp; The forest had become a labyrinth of snow and
ice.
I’d been monitoring the parameters of the thicket
for an hour, and my vantage point in the crook of a
tree branch had turned useless. The gusting wind
blew thick flurries to sweep away my tracks, but
buried along with them any signs of potential
quarry.
Hunger had brought me farther from home than I
usually risked, but winter was the hard time. The
animals had pulled in, going deeper into the woods
than I could follow, leaving me to pick off
stragglers one by one, praying they’d last until
spring.
They hadn’t.
I wiped my numb fingers over my eyes, brushing
away the flakes clinging to my lashes. Here there
were no telltale trees stripped of bark to mark the
deer’s passing—they hadn’t yet moved on. They
would remain until the bark ran out, then travel
north past the wolves’ territory and perhaps into
the faerie lands of Prythian—where no mortals
would dare go, not unless they had a death wish.
A shudder skittered down my spine at the
thought, and I shoved it away, focusing on my
surroundings, on the task ahead. That was all I
could do, all I’d been able to do for years: focus
on surviving the week, the day, the hour ahead.
And now, with the snow, I’d be lucky to spot
anything—especially from my position up in the
tree, scarcely able to see fifteen feet ahead. Stifling
a groan as my stiff limbs protested at the
movement, I unstrung my bow before easing off the
tree.
The icy snow crunched under my fraying boots,
and I ground my teeth. Low visibility, unnecessary
noise—I was well on my way to yet another
fruitless hunt.
Only a few hours of daylight remained. If I
didn’t leave soon, I’d have to navigate my way
home in the dark, and the warnings of the town
hunters still rang fresh in my mind: giant wolves
were on the prowl, and in numbers. Not to mention
whispers of strange folk spotted in the area, tall
and eerie and deadly.
Anything but faeries, the hunters had beseeched
our long-forgotten gods—and I had secretly prayed
alongside them. In the eight years we’d been living
in our village, two days’ journey from the immortal
border of Prythian, we’d been spared an attack—
though traveling peddlers sometimes brought
stories of distant border towns left in splinters and
bones and ashes. These accounts, once rare enough
to be dismissed by the village elders as hearsay,
had in recent months become commonplace
whisperings on every market day.
I had risked much in coming so far into the
forest, but we’d finished our last loaf of bread
yesterday, and the remainder of our dried meat the
day before. Still, I would have rather spent another
night with a hungry belly than found myself
satisfying the appetite of a wolf. Or a faerie.
Not that there was much of me to feast on. I’d
turned gangly by this time of the year, and could
count a good number of my ribs. Moving as nimbly
and quietly as I could between the trees, I pushed a
hand against my hollow and aching stomach. I
knew the expression that would be on my two
elder sisters’ faces when I returned to our cottage
empty-handed yet again.
After a few minutes of careful searching, I
crouched in a cluster of snow-heavy brambles.
Through the thorns, I had a half-decent view of a
clearing and the small brook flowing through it. A
few holes in the ice suggested it was still
frequently used. Hopefully something would come
by. Hopefully.
I sighed through my nose, digging the tip of my
bow into the ground, and leaned my forehead
against the crude curve of wood. We wouldn’t last
another week without food. And too many families
had already started begging for me to hope for
handouts from the wealthier townsfolk. I’d
witnessed firsthand exactly how far their charity
went.
I eased into a more comfortable position and
calmed my breathing, straining to listen to the
forest over the wind. The snow fell and fell,
dancing and curling like sparkling spindrifts, the
white fresh and clean against the brown and gray
of the world. And despite myself, despite my numb
limbs, I quieted that relentless, vicious part of my
mind to take in the snow-veiled woods.
Once it had been second nature to savor the
contrast of new grass against dark, tilled soil, or an
amethyst brooch nestled in folds of emerald silk;
once I’d dreamed and breathed and thought in
color and light and shape. Sometimes I would even
indulge in envisioning a day when my sisters were
married and it was only me and Father, with
enough food to go around, enough money to buy
some paint, and enough time to put those colors
and shapes down on paper or canvas or the cottage
walls.
Not likely to happen anytime soon—perhaps
ever. So I was left with moments like this,
admiring the glint of pale winter light on snow. I
couldn’t remember the last time I’d done it—
bothered to notice anything lovely or interesting.
Stolen hours in a decrepit barn with Isaac Hale
didn’t count; those times were hungry and empty
and sometimes cruel, but never lovely.
The howling wind calmed into a soft sighing.
The snow fell lazily now, in big, fat clumps that
gathered along every nook and bump of the trees.
Mesmerizing—the lethal, gentle beauty of the
snow. I’d soon have to return to the muddy, frozen
roads of the village, to the cramped heat of our
cottage. Some small, fragmented part of me
recoiled at the thought.
Bushes rustled across the clearing.
Drawing my bow was a matter of instinct. I
peered through the thorns, and my breath caught.
Less than thirty paces away stood a small doe,
not yet too scrawny from winter, but desperate
enough to wrench bark from a tree in the clearing.
A deer like that could feed my family for a week
or more.
My mouth watered. Quiet as the wind hissing
through dead leaves, I took aim.
She continued tearing off strips of bark, chewing
slowly, utterly unaware that her death waited yards
away.
I could dry half the meat, and we could
immediately eat the rest—stews, pies … Her skin
could be sold, or perhaps turned into clothing for
one of us. I needed new boots, but Elain needed a
new cloak, and Nesta was prone to crave anything
someone else possessed.
My fingers trembled. So much food—such
salvation. I took a steadying breath, double checking my aim.
But there was a pair of golden eyes shining from
the brush adjacent to mine.
The forest went silent. The wind died. Even the
snow paused.
We mortals no longer kept gods to worship, but
if I had known their lost names, I would have
prayed to them. All of them. Concealed in the
thicket, the wolf inched closer, its gaze set on the
oblivious doe.
He was enormous—the size of a pony—and
though I’d been warned about their presence, my
mouth turned bone-dry.
But worse than his size was his unnatural
stealth: even as he inched closer in the brush, he
remained unheard, unspotted by the doe. No animal
that massive could be so quiet. But if he was no
ordinary animal, if he was of Prythian origin, if he
was somehow a faerie, then being eaten was the
least of my concerns.
If he was a faerie, I should already be running.
Yet maybe … maybe it would be a favor to the
world, to my village, to myself, to kill him while I
remained undetected. Putting an arrow through his
eye would be no burden.
But despite his size, he looked like a wolf,
moved like a wolf. Animal, I reassured myself.
Just an animal. I didn’t let myself consider the
alternative—not when I needed my head clear, my
breathing steady.
I had a hunting knife and three arrows. The first
two were ordinary arrows—simple and efficient,
and likely no more than bee stings to a wolf that
size. But the third arrow, the longest and heaviest
one, I’d bought from a traveling peddler during a
summer when we’d had enough coppers for extra
luxuries. An arrow carved from mountain ash,
armed with an iron head.
From songs sung to us as lullabies over our
cradles, we all knew from infancy that faeries
hated iron. But it was the ash wood that made their
immortal, healing magic falter long enough for a
human to make a killing blow. Or so legend and
rumor claimed. The only proof we had of the ash’s
effectiveness was its sheer rarity. I’d seen
drawings of the trees, but never one with my own
eyes—not after the High Fae had burned them all
long ago. So few remained, most of them small and
sickly and hidden by the nobility within highwalled groves. 
But this was the forest, and it was winter.</p>
        <p className='line1'>&nbsp; &nbsp;Phasellus fringilla fringilla turpis nec faucibus. Ut leo 
          turpis, consequat quis sapien a, rutrum porttitor sapien. 
          Suspendisse potenti. Vestibulum ultrices rhoncus sem quis varius. 
          Vestibulum tempor molestie elit, sed scelerisque neque rutrum at. 
          Proin molestie elit eget orci suscipit imperdiet. Pellentesque quis 
          nisi tincidunt, vehicula nisi ac, fermentum velit. Fusce tristique 
          elementum massa, vel dictum metus ullamcorper et. Nam non finibus risus. 
          Donec commodo fringilla mauris, non suscipit leo facilisis quis. Donec 
          sodales eros eros, at vehicula quam tincidunt vel. Ut quis auctor ante. 
          Cras laoreet at dolor et viverra.</p>
          </IonText>
          <br/>
          
        </div>  
        <IonButton className='btnslide' color="light" expand="block" onClick={scrollToTop}>Scroll to Top</IonButton> 
      </IonContent>
    </IonPage>
  );
};

export default Tab6;
