import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebaseApp";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email,password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email,password);
  }
  function logout() {
    return auth.signOut();
  }
  function reset(email) {
    return auth.sendPasswordResetEmail(email);
  }
  const value = {
    currentUser,
    signup,
    login,
    logout,
    reset
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
