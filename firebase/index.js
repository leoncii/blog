import firebase from 'firebase'
import 'firebase/firestore'
// import { firebaseConfig } from './firebaseConfig'

var firebaseConfig = {
  apiKey: "AIzaSyD5Ob1MP05BdVwk0ButjtYRPffG8YB_BIw",
  authDomain: "blog-697de.firebaseapp.com",
  projectId: "blog-697de",
  storageBucket: "blog-697de.appspot.com",
  messagingSenderId: "166230947785",
  appId: "1:166230947785:web:c8e3e2e49ac0f00c339a18"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const INCREMENT_VALUE = 1
export const increment = firebase.firestore.FieldValue.increment(INCREMENT_VALUE)


export default firebase
