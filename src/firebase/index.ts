import * as firebase from 'firebase';
// TODO: firebase 設定後 config ファイルを作成
import { firebaseConfig } from './config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.database();
