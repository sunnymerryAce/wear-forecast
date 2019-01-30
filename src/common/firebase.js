import * as firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBxeYoJk_G2bcvwff4IDwM96K-tIGeXBLM',
  authDomain: 'expense-book-react.firebaseapp.com',
  databaseURL: 'https://expense-book-react.firebaseio.com',
  projectId: 'expense-book-react',
  storageBucket: 'expense-book-react.appspot.com',
  messagingSenderId: '767186481421',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  // TODO オフライン化する場所間違ってるっぽいここでfirestore生成したらfirestoreをreturnするべき
  // Firestore オフラインデータの有効化
  // firebase
  //   .firestore()
  //   .enablePersistence()
  //   .catch(function(err) {
  //     if (err.code == 'failed-precondition') {
  //       // Multiple tabs open, persistence can only be enabled
  //       // in one tab at a a time.
  //       // ...
  //     } else if (err.code == 'unimplemented') {
  //       // The current browser does not support all of the
  //       // features required to enable persistence
  //       // ...
  //     }
  //   });
}

export default firebase;
