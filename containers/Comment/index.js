import { useContext, useState } from 'react'
import { Context } from '../../context/userProvider'
import { useRouter } from 'next/router'
import { ChildComment } from '../../components/ChildComment'

export function Comment({ img = null, name, date, p }) {
  const [disabled, setDisabled] = useState(true)
  const { session, loading } = useContext(Context)
  const { route } = useRouter()
  const [, , postUrl] = route.split('/')

  return <>
    {
      name !== undefined && <ChildComment
        img={img}
        name={name}
        url={postUrl}
        date={date}
        session={session}
        p={p}
        text={p}
      />
    }
    <style jsx>{`
    `}</style>
  </>
}