
import React , { useState } from 'react';
import  { useHistory } from 'react-router-dom'
import './index.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import faucet from './faucet'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/analytics';
import "./Login.css";
import { useAuthState } from 'react-firebase-hooks/auth';
// eslint-disable-next-line 
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, where, getDocs } from "firebase/firestore";
import './App.css'; 


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

 function App() {
  const history = useHistory();
  const [user] = useAuthState(auth);
  const { uid } = auth.currentUser?auth.currentUser:{uid:0};
  console.log(uid);

  const userRef  = firestore.collection("users");
  async function a(){  
    const q = await  userRef.where("uid","==",uid).get();
  
    if(q.empty===false){history.push("/dashboard");console.log(q)}
    q.forEach(doc => {
      console.log(doc.id);
    });
  }
    
if(uid){
  a();
}
  return (
    <div className="App">
      {// eslint-disable-next-line
      }
      <header>
        {/*eslint-disable-next-line*/}
        <h1><span>Faucet</span></h1>
        <SignOut />
      </header>

      <section>
        {user ? <Login/> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);

  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function Login(){
  const history = useHistory();
  const [name, setname] = useState('');
  const [add,setadd] = useState("");
  const userCred = firestore.collection('users');
  const { uid, photoURL } = auth.currentUser;
  const createUser = async (e) => {
    await userCred.add({
    name: name,
    address: add,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    uid,
    photoURL
  });
  history.push("/dashboard");
}
return (
  <div className="Login">
    <Form>
        
      <input value={name} onChange={(e) => setname(e.target.value)} type = "text" placeholder = "Nick Name"/> 
  <p></p>
       <input value={add} onChange={(e) => setadd(e.target.value)} type = "text" placeholder ="WEB3 Address"/> 
       <p> </p>
       <div class="buttondiv">
      <Button block size="lg" onClick={createUser} >
        Submit
      </Button>
      </div>
    </Form>
  </div>
);}
export default App;