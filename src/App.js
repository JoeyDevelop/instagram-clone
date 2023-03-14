import { useState } from 'react';
import SignedIn from "./components/SignIn"
import { auth, googleProvider } from './config/firebase';
import './App.css';
import { signInWithPopup, signOut } from 'firebase/auth';

const App = () => {
  const [signedIn, setSignedIn] = useState(false)

  console.log(auth?.currentUser?.email)

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err)
    }
    if (auth?.currentUser?.email !== undefined) {
      setSignedIn(true)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
    setSignedIn(false)
  }

  return (
    <div>
      {signedIn ?
      <SignedIn /> :
      <div className='signInPage'>
        <h1 className='title'>InstaSham</h1>
        <input className='signInButton' onClick={signInWithGoogle} type={"image"} src={require('./imgs/googleButton.png')} alt="Sign in with Google" />
      </div>
      }
    </div>
    // <div className='signInPage'>
    //   <h1 className='title'>InstaSham</h1>
    //   <input className='signInButton' onClick={signInWithGoogle} type={"image"} src={require('./imgs/googleButton.png')} alt="Sign in with Google" />
    //   {signedIn ? 
    //   <SignedIn /> :
    //   null
    //   }
    // </div>
  );
}

export default App