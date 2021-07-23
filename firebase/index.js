import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig'

!firebase.apps[0]
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const INCREMENT_VALUE = 1
export const increment = firebase.firestore.FieldValue.increment(INCREMENT_VALUE)

export default firebase
