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

  const signIn = async () => {
    try {
      const clientId = process.env.CLIENT_ID;
      const redirectUrl = process.env.REDIRECT_URL;
      const scopes = encodeURI('user:read:email user:read:follows')
      const authUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes}`;
      const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse;
      
      setUserToken(params.access_token);

      if(type === 'success') {
        const { data } = await api.get('/users');
        const objUser = data.data[0];

        setUser({
          id: Number(objUser.id),
          email: objUser.email,
          name: objUser.display_name,
          photo: objUser.profile_image_url,
        });
        // TODO - salvar no async storage
      }   
    } catch (error){
      console.log(error);  
      Alert.alert('Erro ao conectar a conta Twitch')
    }
  }

  const signOut = async () => {
    setUser({} as User);
    setUserToken('');
  }

  useEffect(() => {
    api.interceptors.request.use(
      (config) => {
        config.headers = {
          'Client-ID': process.env.CLIENT_ID,
          'Authorization': `Bearer ${userToken}`
        }
        return config;
      }, 
      (error) => {
        return Promise.reject(error)
      }
    )
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