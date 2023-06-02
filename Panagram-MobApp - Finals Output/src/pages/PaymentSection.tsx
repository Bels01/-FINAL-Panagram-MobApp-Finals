import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScrollContent, IonLabel, IonInput,
  IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './PaymentSection.css';
import { IonIcon } from '@ionic/react';
import React, { createRef } from 'react';
import { arrowBack, ellipse, heart, home, person, square, triangle } from 'ionicons/icons';
import { useState } from 'react';
import { OverlayEventDetail } from '@ionic/core/components';
import { Link } from 'react-router-dom';


const  PaymentSection: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Add payment processing logic here
    alert('Payment processed:' +" "+"Card Number:"+" "+cardNumber +" "+"Epiry Date"+" "+ expiryDate +" "+"CVV"+" "+ cvv );
    window.location.pathname="tab2";
    // You can also navigate to a success page or display a message
    
  };
  


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Payment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
      <h1 className='pay'>Payment Details</h1><br/>
     
        <div className='paymentsec'>
        <label>Name</label><br/><br/>
        <IonInput className='txtInput' type='text' placeholder='Enter your name'
          onIonChange={(e: any) => setCardNumber(e.target.value)}></IonInput>
        <br/>
        <label>Card Number</label><br/><br/>
        <IonInput className='txtInput'
          placeholder="Card Number"
          value={cardNumber}
          onIonChange={(e: any) => setCardNumber(e.target.value)}
        />
        <br/>
        <label>Expiry Date</label><br/><br/>
        <IonInput className='txtInput'
          placeholder="Expiry Date"
          value={expiryDate}
          onIonChange={(e: any) => setExpiryDate(e.target.value)}
        />
        <br/>
        <label>CVV</label><br/><br/>
        <IonInput className='txtInput'
          placeholder="CVV"
          value={cvv}
          onIonChange={(e: any) => setCVV(e.target.value)}
        />
        <br/>
        <IonButton className='btnpay' onClick={handlePayment}>
          Pay
        </IonButton>
        <br/>
        <br/>

        <Link to='/Account'>
        <IonButton className='btnpay'>
          Back
        </IonButton>
        </Link>

        <IonLabel id='lblPay'></IonLabel>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaymentSection;
