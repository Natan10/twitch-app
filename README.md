<h1>Twitch App <img src="layout/logo-tw.svg" width="30" height="30"/></h1>

<h4>
This is an mobile app to list your favorite Twitch streamers.
</h4>

</br>

<p align='center'>
<img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/Natan10/twitch-app" />
<img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/Natan10/twitch-app" />
<img alt="" src="https://img.shields.io/github/repo-size/Natan10/twitch-app" />
<img alt="GitHub Issues" src="https://img.shields.io/github/issues/Natan10/twitch-app" />
<img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/Natan10/twitch-app" />
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/Natan10/twitch-app" />
<img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/Natan10/twitch-app" />
</p>

</br>

<div align='center'>
  <img alt="Signin" src="layout/signin.png" width="250"/>
  <img alt="Layout" src="layout/dashboard.png" width="250"/>
</div>

</br>

## Tecnologies 🚀

This app uses social login with Twitch integration API and expo authentication session

- Expo SDK 47
- Expo Auth Session
- Expo Fonts
- Twitch API
- Styled Components
- Axios
- React Context API

</br>

## How to use ? 🤔

- First, you must create an application in the Twitch developer interface
    - [documentation Twitch](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth#implicit-grant-flow)
- Add client id and redirect url in your .env file
    - example redirect url: https://auth.expo.io/@user-expo-name/app-name
- Install dependencies

```bash
  # install expo-cli
  sudo npm install — global expo-cli

  # clone this repository
  git clone https://github.com/Natan10/twitch-app

  # enter in twitch-app
  cd twitch-app

  # install dependencias
  npm install or yarn install

  # start application
  expo start
```



