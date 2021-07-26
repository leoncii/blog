import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { postLikesFromWhichPost, getLikesFromPost } from '../../firebase/db'
import { Share } from '../../components/Share'
import { Context } from '../../context/userProvider'

export function ShareBar () {
  const { session } = useContext(Context)
  const { asPath } = useRouter()
  const [likes, setLikes] = useState(null)
  const [flag, setFlag] = useState(false)
  const setUrlFirebase = asPath.slice(6, asPath.length)

  const handleLikes = () => {
    if (session && setUrlFirebase && !flag) {
      setFlag(true)
      postLikesFromWhichPost(setUrlFirebase)
        .then(() => getLikesFromPost(setUrlFirebase)
          .then(setLikes))
    }
  }

  useEffect(() => {
    setUrlFirebase && getLikesFromPost(setUrlFirebase)
      .then(res => setLikes(res))
  }, [setUrlFirebase])

  return (
    <>
      <Share
        likes={likes}
        session={session}
        onClick={handleLikes}
        setUrlFirebase
      />
    </>
  )
}
