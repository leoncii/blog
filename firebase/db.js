import firebase from '../firebase'
import { increment } from '../firebase'

const db = firebase.firestore()
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

export async function createUser(uid, data) {
  return await db.collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
}

export async function createComment(data) {
  return await db.collection('comments')
    .doc()
    .set(data, { merge: true })
}

export async function getALlComments() {
  return await db.collection('comments')
    .orderBy("date", "desc")
    .get()
    .then(querySnapShot => {
      return querySnapShot.docs.map(mapCommentFromFirebaseToObject)
    })
}

export function listenLatestComments(callback) {
  return db.collection('comments')
    .limit(3)
    .orderBy('date', 'desc')
    .onSnapshot(({ docs }) => {
      const newComments = docs.map(mapCommentFromFirebaseToObject)
      callback(newComments)
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



export async function getLikesFromFirebase(whichPost) {
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