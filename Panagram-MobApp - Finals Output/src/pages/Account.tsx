import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonGrid, IonIcon, useIonLoading, IonLoading, IonAlert  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import react,  { useState} from 'react';
import { ellipse, heart, home, library, person, square, triangle, notifications, arrowBack, arrowBackCircle, help, cash } from 'ionicons/icons';
import './Account.css';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { queries } from '@testing-library/react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Account: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(localStorage.getItem('uploadedImage') || null);
    const [present, dismiss] = useIonLoading();
    const [showAlert3, setShowAlert3] = useState(false);
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageBase64 = reader.result as string;
          localStorage.setItem('uploadedImage', imageBase64);
          setImageSrc(imageBase64);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <IonPage className='page'>
      <IonHeader>
        <IonToolbar>
          <Link to='tab2'>
          <IonIcon className='arrowback' icon={arrowBack}  onClick={() => {
        present({ message: 'Please wait...', duration: 500, spinner: 'circular'}); }}></IonIcon>
          </Link>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"> 
      <div className='contain'>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className='img'>
      {imageSrc && <IonImg src={imageSrc} />}
      <br/>
      </div>
      <h3 className='profname'><u>Joseph Estrada</u></h3>
      <br/>
      <p className='update'>Update profile</p>
      <input className='uploader' type="file" accept="image/*" onChange={handleImageUpload} /> 
    </div>
       <div className='buttons'>
        <Link to='https://dashboard.stripe.com/login?redirect=%2Fpayment-links%2Fcreate%2Fstandard-pricing'>
       <IonButton className='optbtn' color='light'  fill='solid'onClick={() => {
        present({ message: 'Please wait...', duration: 500, spinner: 'circular'}); }}><IonIcon icon={notifications}></IonIcon>&nbsp;Notifications</IonButton><br/>
       </Link>
       <Link to='/paymentsection'>
       <IonButton className='optbtn' color='light' fill='solid'> <IonIcon icon={cash} onClick={() => {
        present({ message: 'Please wait...', duration: 500, spinner: 'circular'}); }}></IonIcon>&nbsp;&nbsp;App Subcription</IonButton><br/>
       </Link>
       <IonButton  className='optbtn' color='light' fill='solid'onClick={() =>   setShowAlert3(true)} expand="block" >Sign out</IonButton><br/>
       <IonAlert
          isOpen={showAlert3}
          onDidDismiss={() => setShowAlert3(false)}
          cssClass="my-custom-class"
          header={"Are you sure want to sign out?"}
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              handler: blah => {
                console.log("Confirm Cancel: blah");
              }
            },
            {
              text: "Okay",
              handler: () => { 
                present({ message: 'loading...', duration: 1500, })
                window.location.pathname='/tab1';
              }
            }
          ]}
        />
       </div>
       <br/>
       <br/>
       <p>version 1.0.2</p>
      </IonContent>
    </IonPage>
  );
};

export default Account;
