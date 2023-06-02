import { IonButton, IonCheckbox, 
  IonContent, IonHeader, 
  IonImg, IonInput, 
  IonItem, IonLabel, 
  IonLoading, IonPage, 
  IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Tab1.css';
import { Link } from 'react-router-dom';


const Tab1: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/tab1', {
        username,
        password
      });
      // Redirect to display page
      window.location.href = '/tab2';
    } catch (error) {
      console.error(error);
      alert('Wrong Uername of Password');
    }
  };


  

  return (
    
    <IonPage className='backpage'>
    <IonContent  fullscreen> 
    <IonImg className='mlogo' src="assets\img\mob-logo.png"></IonImg>
        <h2>Panagram</h2>
      <IonLabel></IonLabel>
      <form onSubmit={handleSubmit}>
      <IonItem class="txt1">
          <IonInput className='label' 
            value={username}
            placeholder="Username"
            onIonChange={(e) => setUsername(e.detail.value!)}
            required
          ></IonInput>
          </IonItem>
          <br/>
          <br/>
          <IonItem class="txt1">
          <IonInput className='label' 
            value={password}
            placeholder="Password"
            type="password"
            onIonChange={(e) => setPassword(e.detail.value!)}
            required
          ></IonInput>
          </IonItem>
        </form>
     
      <br/>

      <IonButton shape='round'  color="orange"  class="btnlogin" onClick={handleSubmit} >Login</IonButton>
    
      <br/>
      <a href='regform'>
      <IonButton shape='round'  color="orange"  class="btnreg"  >Register</IonButton>
      </a>
      <br/>
      <h6 className='forget'><u>Forgot your password?</u></h6>
    
      
    </IonContent>
  </IonPage>
  
);
};

export default Tab1;
