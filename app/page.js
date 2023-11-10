"use client"
import Account from './signin/page';
import Profile from './profile/page';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import firebaseConfig from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

// Sigin
const provider = new GoogleAuthProvider();
const auth = getAuth();









export default function Home() {



  // Initialize User_login state variable with false
  const [User_login, setUserLogin] = useState(false);

  // Function to handle Google Sign-In
  const signinwithgoogle = async () => {
    try {
      // Perform the Google Sign-In here
      await signInWithRedirect(auth, provider);

      // After successful sign-in, set User_login to true
      setUserLogin(true);
    } catch (error) {
      // Handle sign-in errors here
      console.error('Sign-In Error:', error);
    }
  };

  useEffect(() => {
    // Check for the authentication state when the component mounts
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUserLogin(true);
      } else {
        // User is signed out
        setUserLogin(false);
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  return (




    
    <>
      {User_login ? <Profile /> : <Account action={signinwithgoogle} />}
    </>
  );
}
