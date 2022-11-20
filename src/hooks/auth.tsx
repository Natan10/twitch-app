import { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';

import { api } from '../services/api';

interface User {
  id: number;
  email: string;
  name: string;
  photo?: string;
}

interface AuthContextProps {
  user: User;
  userToken: string;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: any;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  },
  type: string;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [userToken, setUserToken] = useState('');

  const { CLIENT_ID } = process.env
  const { REDIRECT_URL } = process.env

  const signIn = async () => {
    try {
      const scopes = encodeURI('user:read:email user:read:follows')
      const authUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scopes}`;
      const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse;
      
      if(type === 'success') {
        setUserToken(params.access_token);
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;
        
        const { data } = await api.get('/users');
        const objUser = data.data[0];

        setUser({
          id: Number(objUser.id),
          email: objUser.email,
          name: objUser.display_name,
          photo: objUser.profile_image_url,
        });
      }   
    } catch (error){
      console.log(error);  
      Alert.alert('Erro ao conectar a conta Twitch')
    }
  }

  const signOut = async () => {
    try {
      await AuthSession.revokeAsync({token: userToken, clientId: CLIENT_ID}, {
        revocationEndpoint: 'https://id.twitch.tv/oauth2/revoke'
      })
      setUser({} as User);
      setUserToken('');
      delete api.defaults.headers.common['Authorization'];
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao realizar signOut');
    }
  }

  useEffect(() => {
    api.defaults.headers['Client-Id'] = CLIENT_ID;
  },[]);
  
  return(
    <AuthContext.Provider value={{user, userToken, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
}