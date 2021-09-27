import React from "react";
import NavBar from "./components/navbar"
import ReCAPTCHA from "react-google-recaptcha";
import './dashboard.scss' 
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/analytics';
import HCaptcha from '@hcaptcha/react-hcaptcha';
firebase.initializeApp({
    apiKey: "AIzaSyBTMeOunq_iQ_CZCylzVd54bNeEK-K3MCU",
    authDomain: "wassup-f28be.firebaseapp.com",
    projectId: "wassup-f28be",
    storageBucket: "wassup-f28be.appspot.com",
    messagingSenderId: "748129665554",
    appId: "1:748129665554:web:0651469896a71bb4c98ecb"
  })
  
  const auth = firebase.auth();
  // eslint-disable-next-line 
  const firestore = firebase.firestore();

function Dashboard(){
   
        
    function handleVerificationSuccess(token, ekey){
       alert("10 tokens have been transfered to your account");
    }
    return(
       <div className="dashb"> 
   <header>     
  <NavBar />
  </header>
 <section className = "captcha">
     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   <HCaptcha sitekey = "8d06d1d5-97a4-4751-aed1-36cd182db9eb"
   onVerify = {(token,ekey) => handleVerificationSuccess(token, ekey)}
   />
  </section>
  </div>
    )
}

export default Dashboard;