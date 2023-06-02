import React, { useState } from 'react';
import { IonButton, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonToolbar,IonTitle, IonContent } from '@ionic/react';
import { useHistory } from 'react-router';
import axios from 'axios';
import './Regform.css';



const Regform = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/regform', {
        firstName,
        lastName,
        email,
        username,
        password
      });
      // Redirect to login page
      window.location.href = '/tab1';
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Register</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
          <br/>
        <form onSubmit={handleRegister}>
          <IonInput className='text1'
            value={firstName}
            placeholder="First Name"
            onIonChange={(e) => setFirstName(e.detail.value!)}
            required
          ></IonInput>
          <br/>
          <IonInput className='text1'
            value={lastName}
            placeholder="Last Name"
            onIonChange={(e) => setLastName(e.detail.value!)}
            required
          ></IonInput>
          <br/>
          <IonInput className='text1'
            value={email}
            placeholder="Email"
            type="email"
            onIonChange={(e) => setEmail(e.detail.value!)}
            required
          ></IonInput>
          <br/>
          <IonInput className='text1'
            value={username}
            placeholder="Username"
            onIonChange={(e) => setUsername(e.detail.value!)}
            required
          ></IonInput>
          <br/>
          <IonInput className='text1'
            value={password}
            placeholder="Password"
            type="password"
            onIonChange={(e) => setPassword(e.detail.value!)}
            required
          ></IonInput>
          <br/>
        </form>
      <br/>
      <br/>
      <IonButton className='btnregg' onClick={handleRegister}>Register</IonButton>
      <br/>
      <a href='tab1'>
      <IonButton className='btnregg'>back</IonButton>
      </a>
      </IonContent>
      </IonPage>
  );
};

export default Regform;
