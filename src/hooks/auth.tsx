import { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';

interface User {
  email: string;
  name: string;
  photo?: string;
}

interface AuthContextProps {
  user: User;
  signIn: () => Promise<void>;
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

  const signIn = async () => {
    try {
      const clientId = process.env.CLIENT_ID;
      const redirectUrl = process.env.REDIRECT_URL;
      const authUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user%3Aread%3Aemail`;
      const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse;
      

      // login: narutinhoDoNordeste
      // senha: @Saradao89

      // https://api.twitch.tv/helix/games/top
      // https://api.twitch.tv/helix/users
      console.log(params)
      if(type === 'success') {
        const response = await fetch(`https://api.twitch.tv/helix/users`,{
          headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${params.access_token}`
          }
        });
        const data = await response.json();
        const objUser = data.data[0];

        setUser({
          email: objUser.email,
          name: objUser.display_name,
          photo: objUser.profile_image_url
        });

        // TODO - salvar no async storage
      }   
    } catch (error){
      console.log(error);  
      Alert.alert('Erro ao conectar a conta Twitch')
    }
  }

  return(
    <AuthContext.Provider value={{user, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
}