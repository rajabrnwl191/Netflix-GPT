import { React, useEffect } from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from "../utils/firebase"
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../utils/constant';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // You can dispatch an action to store user data in Redux or local state
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black w-60 z-10 flex justify-between">
      <div>
        < img src={LOGO}
          alt="Netflix Logo"
          className="absolute h-16 w-42 " />
      </div>
      {user && <div className="flex flex-col justify-center items-center cursor-pointer" title="Sign Out" onClick={handleSignOut}  >
        <img alt="usericon" className="w-10 h-10 rounded-full object-cover" src={user.photoURL} />
        {/* <button className="font-bold text-white " >Sign Out</ button> */}
      </div>
      }
    </div>

  )
}

export default Header