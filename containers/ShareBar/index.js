import { useState, useEffect, useRef, useContext } from 'react'
import ScoreStar from '../../svg/ScoreStar'
import { useRouter } from 'next/router'
import { postLikesFromWhichPost, getLikesCount, getLikesFromPost, getLikesFromUserId } from '../../firebase/db'
import { Share } from '../../components/Share'
import { Context } from '../../context/userProvider'


export function ShareBar() {
  const { session } = useContext(Context)
  const router = useRouter()
  const [likes, setLikes] = useState(null)
  const [flag, setFlag] = useState(false)
  const setUrlFirebase = router.asPath.slice(6, router.asPath.length)

  const handleLikes = () => {
    if (session && setUrlFirebase && !flag) {
      setFlag(true)
      postLikesFromWhichPost(setUrlFirebase)
        .then(() => getLikesFromPost(setUrlFirebase)
          .then(setLikes))
    }
    return;
  }

  const handleUserLikes = () => {

  }

  useEffect(() => {
    setUrlFirebase && getLikesFromPost(setUrlFirebase)
      .then(res => setLikes(res))
  }, [setUrlFirebase])



  return <>
    <Share
      likes={likes}
      session={session}
      onClick={handleLikes}
      setUrlFirebase
    />
  </>
}