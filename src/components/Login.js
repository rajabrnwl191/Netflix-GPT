import React from 'react'
import { useState, useRef } from 'react';
import Header from './Header'
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const focusInput = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = (e) => {
    //validate the form data
    e.preventDefault();
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr"></img>
      </div>
      <form className='absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className="text-3xl font-bold mb-4 p-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        <input type="text" placeholder="Name" className={`w-full p-2 mb-4 border border-gray-300 rounded ${isSignInForm ? 'hidden' : ''}`} />
        <input type="text" placeholder="Email or phone number" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-6 border border-gray-300 rounded" />
        <button type="submit" className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors" onlcik={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4'><span>{isSignInForm ? 'New to Netflix?' : 'Already registered User?'} </span><span className='text-blue-500 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'Sign Up' : 'Sign In'}</span></p>

      </form>
    </div >
  )
}

export default Login