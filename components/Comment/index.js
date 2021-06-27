import { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Context } from '../../context/userProvider'
import { signIn } from 'next-auth/client'
import { createComment } from '../../firebase/db'
import Image from 'next/image'

export default function Comment({ img = null, name, date, p }) {
  const [text, setText] = useState('')
  const [disabled, setDisabled] = useState(true)
  const { session, loading } = useContext(Context)
  console.log("[IMAGE]", img);
  const handleAddComment = (e) => {
    e.preventDefault()
    const newCommet = {
      name: session.user.name,
      img: session.user.image,
      p: text,
      date: new Date()
    }
    createComment(newCommet)
    setText('')
  }

  return <>
    {
      session
        ? null
        : <>
          <button id='bt-signin' onClick={() => signIn('google')}>
            <span>Inicia sesion</span>
          </button>
        </>
    }
    {
      name !== "undefined" && <main>
        <picture>
          <img width={125} height={125} src={img} alt={`Avatar from ${name}`} />
        </picture>
        <div><b>{name}</b> </div>
        <small><i> {date.toString()}</i></small>
        {
          session?.user.name === name && <>
            <textarea
              rows="5"
              value={text}
              onChange={e => setText(e.target.value)}
            ></textarea>
            <button
              id='btn-comment'
              onClick={handleAddComment}
              disabled={text.length < 1}
            >Comentar</button>
          </>
        }
        <p><em>{p}</em></p>
        <hr />
      </main >
    }
    <style jsx>{`
    main {
      display: grid;
      place-items: center;
      text-align: center;
      max-width: 400px;
      grid-template-columns: 90px 1fr;
      margin: 1.8rem auto 1.4rem;
      grid-template-areas: 
      "image name"
      "image date"
      "image p";
      opacity: ${session ? 1 : .6};
    }
    hr {
      height: 1px;
      width: 100%;
      grid-column: 1 / 3;
      grid-row: 7;
    }
     textarea  {
      display: ${p.length === 0 ? 'block' : 'none'};
      grid-area: textarea;
      grid-column: 2;
      width: 100%;
      padding: .4rem .8rem;
      overflow: hidden;
      resize: none;
      margin-right: .6rem;
    }
    #bt-signin {
      background-color: none;
      border: none;
    } 
    #btn-comment {
      display: ${p.length === 0 ? 'block' : 'none'};
      grid-row: 6;
      grid-column: 2;
      width: 100%;
      margin-right: .6rem;
      padding: .4rem .8rem;
      border-radius: 5px;
      border: none;
      color: var(--bg);
      letter-spacing: 1px;
      font-weight: 600;
      cursor: pointer;
      background-color: var(--dark);
    }
    #btn-comment:hover {
      box-shadow: inset 0 0 2px 0 #fff;
    }
    #btn-comment:disabled {
      opacity: .4;
      pointer-events: none;
      user-select:none;
    }

    picture {
      grid-area: image;
    }
    div {
      grid-area: name;
    }
    p {
      grid-area: p;
      font-weight: 550;
      line-height: 1.5;
      letter-spacing: .4px;
      margin: 0;
      padding: .4rem .8rem;
      text-align: left;
    }
    small {
      font-size: .7rem;
      grid-area: date;
      opacity: .8;
    }
    img {
      border-radius: 50%;
      width: 65px;
      height: 65px;
      box-shadow: 0 0 1px 2px var(--dark-green);
    }

    span {
      color: red;
      cursor: ${session ? null : 'pointer'};

    }
    `}</style>
  </>
}