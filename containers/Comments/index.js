import { useContext, useState, useEffect } from 'react'
import { Comment } from '../Comment'
import { Context } from '../../context/userProvider'
import {
  createComment,
  listenLatestComments,
  getMoreUrlComments
} from '../../firebase/db'
import { useRouter } from 'next/router'
import { Button } from '../../components/Button'

export function Comments() {
  const { session, loading, signIn } = useContext(Context)
  const [timeline, setTimeline] = useState([])
  const { route } = useRouter()
  const [, , urlPost] = route.split('/')

  useEffect(() => {
    listenLatestComments({ setTimeline, urlPost })
  }, [])

  const handleGetMoreComments = () => {
    getMoreUrlComments({ urlPost })
      .then(res => {
        setTimeline(res)
      })
      .catch(e => e && new Error('Vaya parece que algo salio mal'))

  }
  const handleLoginWithGoogle = () => signIn('google')
  return <>
    <section>
      <div>
        <h3>Deja un comentario...</h3>
        {
          loading && <span>Loading...</span>
        }
        {
          !session && <Button onClick={handleLoginWithGoogle} warning>Iniciar sesión</Button>
        }
        {
          session && <Comment
            name={session.user.name}
            img={session.user.image}
            p=''
            date={new Date()}
          />
        }
        {
          timeline.map(({ id, name, img, p, date }) => <Comment
            key={id}
            name={name}
            img={img}
            p={p}
            date={date}
          />)
        }
        {
          timeline.length <= 3 && <Button onClick={handleGetMoreComments}>Ver más</Button>
        }
      </div>
    </section>
    <style jsx>{`
      section {
        text-align:center;
        padding-bottom: 3rem;
      }
      div {
        padding: 0 1rem;
      }
      h3 {
        font-size: 1.8rem;
        font-weight: 800;
      }
    `}</style>
  </>
}