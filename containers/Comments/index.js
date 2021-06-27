import { useContext, useState, useEffect } from 'react'
import Comment from '../../components/Comment'
import { Context } from '../../context/userProvider'
import {
  createComment,
  listenLatestComments,
  getALlComments
} from '../../firebase/db'

export default function Comments() {
  const { session, loading } = useContext(Context)
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    listenLatestComments(setTimeline)
  }, [])

  const handleGetMoreComments = async () => {
    const newTimeline = await getALlComments()
    setTimeline(newTimeline)

  }

  return <>
    <section>
      <div>
        <h3>Deja un comentario...</h3>
        {
          loading && <span>Loading...</span>
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
          timeline.length <= 3 && <button onClick={handleGetMoreComments}>Ver más</button>
        }
      </div>
    </section>
    <style jsx>{`
      div {
        padding: 0 1rem;
      }
      section {
        text-align:center;
      }
      h3 {
        font-size: 1.8rem;
        font-weight: 800;
      }
      button {
        display: block;
        background-color: var(--dark);
        width: 115px;
        cursor: pointer;
        color: #fff;
        margin: 0 auto 5rem;
        border: none;
        border-radius: 3px;
        height: 32px;
      }
    `}</style>
  </>
}