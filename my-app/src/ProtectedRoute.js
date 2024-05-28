import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/test-login" />;
};
