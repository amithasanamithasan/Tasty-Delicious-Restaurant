import {  createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export  const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {


const [user, setUser]=useState(null);
const[loading,setLoading]=useState(true);

// social google login 
const googleProvider=new GoogleAuthProvider();

// createUser

const createuser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}
//  Login

const singIn= (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// social google log in user 
const googleSignIn=()=>{
   setLoading();
   return signInWithPopup(auth,googleProvider)
}

// Logout

const logOut=()=>{
    setLoading(true);
    return signOut(auth)
}
// update profile photo Url
const UserupdateProfile=(name,photo)=>{
return  updateProfile (auth.currentUser, {
        displayName: name, photoURL: photo
      });
}


// observed
useEffect(()=>{
 const unsubcribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    // console.log('current User',currentUser);
    if(currentUser){

    }
    else{

    }
    setLoading(false);
})
return () =>{
return unsubcribe ();
}
},[])







const authInfo={
user,
loading,
createuser,
singIn,
logOut,
UserupdateProfile,
googleSignIn,
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;