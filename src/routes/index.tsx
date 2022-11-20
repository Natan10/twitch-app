import React from 'react';

import { SignIn } from '../screens/SignIn';
import { Dashboard } from '../screens/Dashboard';
import { useAuth } from '../hooks/auth';

export const Routes = () => {
  const {user} = useAuth();

  return user.id ? <Dashboard key="dashboard" /> : <SignIn key="signIn" />
}