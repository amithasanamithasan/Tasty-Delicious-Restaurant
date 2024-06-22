import {  createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export  const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    
const [user, setUser]=useState(null);
const[loading,setLoading]=useState(true);

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
// Logout

const logOut=()=>{
    setLoading(true);
    return signOut(auth)
}


// observed
useEffect(()=>{
 const unsubcribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    console.log('current User',currentUser);
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
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;