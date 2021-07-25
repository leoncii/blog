import firebase, { increment } from '../firebase'
const db = firebase.firestore()
const mapCommentFromFirebaseToObject = (doc) => {
  const data = doc.data()
  const { date: { seconds }, img, name } = data
  const dateObj = new Date(seconds * 1000)
  const formatedDate = dateObj.toLocaleString()
  const normalized = {
    ...data,
    img,
    name,
    id: doc.id,
    date: formatedDate
  }
  return normalized
}

export async function getLikesFromUserId ({ setUrlFirebase, session }) {
  return await db.collection('likesFromUser')
    .doc(setUrlFirebase)
    .set({
      user: session.user.email || session.user.name,
      liked: true
    })
}

export async function createComment ({ comment, postUrl }) {
  return await db.collection(postUrl)
    .doc()
    .set(comment, { merge: true })
}

export async function getMoreUrlComments ({ urlPost }) {
  return await db.collection(urlPost)
    .orderBy('date', 'desc')
    .get()
    .then(querySnapShot => {
      if (!querySnapShot) {
        return []
      }
      return querySnapShot.docs.map(mapCommentFromFirebaseToObject)
    })
}

export function listenLatestComments ({ setComments: callback, urlPost }) {
  return db.collection(urlPost)
    .orderBy('date', 'desc')
    .limit(3)
    .onSnapshot(({ docs }) => {
      const newComments = docs.map(mapCommentFromFirebaseToObject)
      if (!newComments) {
        return []
      }
      callback(newComments)
    })
}

export async function getLikesCount (urlPost) {
  return await db.collection('likes')
    .doc(urlPost)
    .get()
    .then(snap => {
      const q = snap.data()
      console.log('getLikesCount', q)
    })
}

export async function getLikesFromPost (whichPost) {
  return await db.collection('blog')
    .doc(whichPost)
    .get()
    .then(snap => {
      if (!snap.data()) {
        return
      }
      const { likes } = snap.data()
      return likes
    })
}

export async function postLikesFromWhichPost (whichPost) {
  return await db.collection('blog')
    .doc(whichPost)
    .update({ likes: increment })
}
