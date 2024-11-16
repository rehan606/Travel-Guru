import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
const auth = getAuth(app);

// Context API 
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create user 
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // SingInUser 
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut 
    const logoutUser = ()=>{
        return signOut(auth)
    };

    // Ovserver 
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        loginUser,
        logoutUser,
    }

    return <AuthContext.Provider  value={authInfo}>
                { children }
            </AuthContext.Provider>
};

export default AuthProvider;