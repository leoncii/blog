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
import Link from 'next/link'

export function Comments() {
  const { session, loading, signIn } = useContext(Context)
  const [comments, setComments] = useState([])
  const { route } = useRouter()
  const [, , urlPost] = route.split('/')

  useEffect(() => {
    listenLatestComments({ setComments, urlPost })
  }, [])

  const handleGetMoreComments = () => {
    getMoreUrlComments({ urlPost })
      .then(res => {
        setComments(res)
      })
      .catch(e => e && new Error('Vaya parece que algo salio mal'))
  }

  const handleLoginWithGoogle = () => signIn('google')
  return <>
    <section>
      <div>
        <h3>Deja un comentario...</h3>
        {
          !session && <>
            <Link href='/signin'>
              <a>
                Iniciar sesión
              </a>
            </Link>
          </>
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
          comments.length <= 0 && <div> Loading...</div>
        }
        {
          comments.map(({ id, name, img, p, date }) => <Comment
            key={id}
            name={name}
            img={img}
            p={p}
            date={date}
          />)
        }
        {
          comments.length <= 3 && <Button onClick={handleGetMoreComments}>Ver más</Button>
        }
      </div>
    </section>
    <style jsx>{`
      section {
        text-align:center;
        padding-bottom: 3rem;
        padding-top: 4rem;
      }
      div {
        padding: 0 1rem;
      }
      h3 {
        font-size: 1.8rem;
        font-weight: 800;
        margin: 2rem 0;
        padding-bottom: 2rem;
      }
      a {
        color: red;
      }
    `}</style>
  </>
}