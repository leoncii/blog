import { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/client'
import { Context } from '../../context/userProvider'
import { createComment } from '../../firebase/db'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChildComment } from '../../components/ChildComment'

export function Comment({ img = null, name, date, p }) {
  const [disabled, setDisabled] = useState(true)
  const { session, loading } = useContext(Context)
  const { route } = useRouter()
  const [, , posturl] = route.split('/')

  return <>
    {
      name !== undefined && <ChildComment
        img={img}
        name={name}
        url={posturl}
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