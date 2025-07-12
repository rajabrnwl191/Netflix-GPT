import { React, useState, useRef } from 'react';
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    // const message = checkValidData(email.current.value, password.current.value, name.current ? name.current.value : null);

    if (!message) {
      setErrorMessage(message);
      return;

    }
    //if the form is valid, then call the firebase api
    if (!isSignInForm) {
      //sign up the user
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/203380276?s=400&u=750857006c83d6115520b9153ff1d9e3bb4ddce1&v=4"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

            navigate('/browse');
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
            // ...
          });
          console.log('User signed up successfully:', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
          console.error('Error signing up:', errorCode, errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log('User signed In successfully:', user);

          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          console.error('Error signing In:', errorCode, errorMessage);
        });

    }
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" alt="logo"></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white bg-opacity-80' >
        <h1 className="text-3xl font-bold mb-4 p-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        <input ref={name} type="text" placeholder="Name" className={`text-black  w-full p-2 mb-4 border border-gray-300 rounded ${isSignInForm ? 'hidden' : ''}`} />
        <input ref={email} type="text" placeholder="Email or phone number" className="text-black w-full p-2 mb-4 border border-gray-300 rounded" />
        <input ref={password} type="password" placeholder="Password" className="text-black w-full p-2 mb-4 border border-gray-300 rounded" />
        <p className="text-red-500 py-4 font-bold">{errorMessage}</p>
        <button type="submit" className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors" onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4'><span>{isSignInForm ? 'New to Netflix?' : 'Already registered User?'} </span><span className='text-blue-500 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'Sign Up' : 'Sign In'}</span></p>
      </form>
    </div >
  )
}

export default Login