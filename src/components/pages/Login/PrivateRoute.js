import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

export function PrivateLoginRoute({ children }) {
    const { currentUser } = useAuth();
    return currentUser ? <Navigate to="/home" /> : children ;
  }
