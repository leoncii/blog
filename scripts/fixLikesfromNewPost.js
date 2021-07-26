const firebase = require('firebase')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: 'AIzaSyD5Ob1MP05BdVwk0ButjtYRPffG8YB_BIw',
  authDomain: 'blog-697de.firebaseapp.com',
  projectId: 'blog-697de',
  messagingSenderId: '166230947785',
  storageBucket: 'blog-697de.appspot.com',
  appId: '1:166230947785:web:c8e3e2e49ac0f00c339a18'
}

const db = (
  firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
).firestore()
const [,, newPostName] = process.argv

db.collection('blog')
  .doc(newPostName)
  .set({ likes: 1 })
  .then(() => console.log('post Creado! ♥', newPostName))
  .catch(e => console.log(e.message))
  .finally(() => process.exit(-1))
