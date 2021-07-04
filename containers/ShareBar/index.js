import { useState, useEffect, useRef } from 'react'
import ScoreStar from '../../svg/ScoreStar'
import { useRouter } from 'next/router'
import { postLikesFromWhichPost, getLikesCount, getLikesFromPost } from '../../firebase/db'
import { Share } from '../../components/Share'

export function ShareBar() {
  const [likes, setLikes] = useState(null)
  const [verify, setVerify] = useState(false)
  const router = useRouter()
  const setUrlFirebase = router.asPath.slice(6, router.asPath.length)

  // const [likes, setLikes] = useState(() => {
  //   getLikesCount(setUrlFirebase)
  // })

  const handleLikes = () => {
    setVerify(true)
    postLikesFromWhichPost(setUrlFirebase)
      .then(() => getLikesFromPost(setUrlFirebase)
        .then(setLikes)
      )
    //disabled likes
  }

  useEffect(() => {
    setUrlFirebase && getLikesFromPost(setUrlFirebase)
      .then(res => setLikes(res))
  }, [setUrlFirebase])

  return <>
    <Share
      likes={likes}
      onClick={handleLikes}
      setUrlFirebase
      verify
    />
  </>
}