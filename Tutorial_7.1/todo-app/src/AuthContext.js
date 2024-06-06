import React, { createContext, useContext, useeffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firestore/auth";
import {Auth } from "./firebase";

const AuthContext = createContext();

 export const useAuth= () => {
  return useContext(AuthContext);
 };

 export const AuthProvider =({ children }) => { useState (null);
 const [loading, setLoading] = useState(true);

 const login = ( emaill, password) => {
  return signInWithEmailAndPassword (auth, email, password);
 };

 const signup = (email, pasword) => {
  return ( auth, email, password);
 };

 const logout = ()=> {
  return signOut(auth);
 };

 useEffect(() => {
  const unsubcribe = onAuthStateChanged(auth, (user) => {
    setCurrentuser(user);
    setLoading(false);
  });
  return unsubscribe;
 }, []);

 const value = {
  currentUser,
  login,
  signup,
  logout
 };

 return (
  <AuthContext.Provider value ={value}>
    {!loading && children }
  </AuthContext.Provider>
   );
 };