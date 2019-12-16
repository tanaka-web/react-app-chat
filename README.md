# react-app-chat

app: https://react-app-chat-439c2.web.app/
github: https://github.com/tanaka-web/react-app-chat


## setting

```
git clone https://github.com/tanaka-web/react-app-chat.git
cd react-app-chat
yarn install
```

## firebase
firebase project 作成

firebase realtime database 設定

```
touch src/firebase/config.ts

src/firebase/config.ts へ firebase project の設定を記入
----
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
``` 


## deploy local

```
yarn start
```
http://localhost:3000


## deploy production
```
yarn deploy
```