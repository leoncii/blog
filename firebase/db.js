import firebase from '../firebase'
import { increment } from '../firebase'

export const db = firebase.firestore()
const mapCommentFromFirebaseToObject = (doc) => {
  const data = doc.data()
  const { date: { seconds }, img, name } = data
  const dateObj = new Date(seconds * 1000)
  const formatedDate = dateObj.toLocaleString()
  const normalized = {
    ...data,
    id: doc.id,
    date: formatedDate
  }
  return normalized
}

export async function getUserLink() {
  return firebase.auth.OAuthProvider('google.com')
    .then(res => console.log("[RES]", res))
}

export async function getRedirect() {
  return firebase.auth().getRedirectResult()
    .then(function (result) {
      console.log("[RESULT]", result);
      if (result.credential) {
        var token = result.credential.accessToken;
      }
      var user = result.user;
    })
  var provider = new firebase.auth.OAuthProvider('google.com');
    console.log('PROVIDER',provider)
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithRedirect(provider);
}















export async function createUser(uid, data) {
  return await db.collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
}

export async function createComment({ comment, posturl }) {
  return await db.collection(posturl)
    .doc()
    .set(comment, { merge: true })
}

export async function getMoreUrlComments({ urlPost }) {
  return await db.collection(urlPost)
    .orderBy('date', 'desc')
    .get()
    .then(querySnapShot => {
      return querySnapShot.docs.map(mapCommentFromFirebaseToObject)
    })
}

export function listenLatestComments({ setTimeline: callbak, urlPost }) {
  return db.collection(urlPost)
    .limit(3)
    .orderBy('date', 'desc')
    .onSnapshot(({ docs }) => {
      const newComments = docs.map(mapCommentFromFirebaseToObject)
      callbak(newComments)
    })
}

export async function newLeadWithEmail({ email }, payload) {
  return await db.collection('leads')
    .doc(email)
    .set({
      data: payload,
      date: new Date()
    })
}

export async function likesArticles(url) {
  await db.collection('likes')
}


export async function getLikesCount(urlPost) {
  return await db.collection('likes')
    .doc(urlPost)
    .get()
    .then(snap => {
      const q = snap.data()
      console.log("getLikesCount", q);
    })
}



export async function getLikesFromPost(whichPost) {
  return await db.collection('blog')
    .doc(whichPost)
    .get()
    .then(snap => {
      const { likes } = snap.data()
      return likes
    })
}

export async function postLikesFromWhichPost(whichPost) {
  return await db.collection('blog')
    .doc(whichPost)
    .update({ likes: increment })
}