import { useState, useEffect, useRef } from 'react'
import ScoreStar from '../../svg/ScoreStar'
import { useRouter } from 'next/router'
import { postLikesFromWhichPost, getLikesCount, getLikesFromFirebase } from '../../firebase/db'

export default function ShareBar() {
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
      .then(() => getLikesFromFirebase(setUrlFirebase)
        .then(setLikes)
      )
    //disabled likes
  }

  useEffect(() => {
    setUrlFirebase && getLikesFromFirebase(setUrlFirebase)
      .then(res => setLikes(res))
  }, [setUrlFirebase])

  return <>
    <section>
      <div className='bonico'>
        <div className='likes' onClick={handleLikes}>
          <h3>¿Qué te ha parecido?</h3>
          <span> 👌 {likes}</span>
        </div>
        <div className='share'>
          <h3>- Comparte ❤ -</h3>
          <small>
            <span>Facebook</span>
            <span>Instagram</span>
          </small>
        </div>
      </div>
    </section>
    <style jsx>{`
    section {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: rgb(0,0,0);
      color: #fff;
      z-index: 1;
    }
    .bonico {
      display: flex;
      justify-content: space-evenly;
      padding-bottom: 10px;
      text-align: center;
    }
    h3 {
      text-align:center;
      margin: 3px;
    }
    .likes {
      display: ${!setUrlFirebase ? 'none' : 'flex'};
      cursor: pointer;
      flex-direction: column;
      pointer-events: ${verify ? 'none' : 'auto'};
    }
    span {
      margin-right: 5px;
    }
    
  `}</style>
  </>
}