import { useState } from 'react'
import { Button } from '../Button'
import { createComment } from '../../firebase/db'
export function ChildComment({ img, name, date, session, p, url: postUrl }) {
  const [text, setText] = useState('')

  const handleAddComment = (e) => {
    e.preventDefault()
    const comment = {
      name: session.user.name,
      img: session.user.image,
      p: text,
      date: new Date()
    }
    createComment({ comment, postUrl })
    setText('')
  }

  const handleChange = e => {
    setText(e.target.value)
  }

  return <>
    <main>
      <picture>
        <img width={125} height={125} src={img} alt={`Avatar from ${name}`} />
      </picture>
      <div><b>{name}</b> </div>
      {
        session?.user.name === name && <><p>
          <textarea
            rows="5"
            value={text}
            onChange={handleChange}
          ></textarea>
          <button
            id='btn-comment'
            onClick={handleAddComment}
            disabled={text.length < 1}
          >Comentar</button>
        </p>
        </>
      }
      {
        p.length >= 2 && <>
          <small><i> {date.toString()}</i></small>
          <p><em>{p}</em></p>
        </>
      }
    </main >
    <style jsx>{`
      main {
        display: grid;
        place-items: center;
        text-align: center;
        max-width: 400px;
        grid-template-columns: 90px 1fr 1fr;
        grid-template-rows: 45px 1fr 30px;
        margin: 1.8rem auto 1.4rem;
        grid-template-areas: 
        "image name date"
        ". p p"
        ". . .";
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
        box-shadow: inset 0 0 5px 0 #fff;
      }
      #btn-comment:disabled {
        opacity: .4;
        pointer-events: none;
        user-select:none;
      }
      #btn-comment:focus {
        box-shadow: inset 0 0 5px 0 #fff;
      }
      picture {
        grid-area: image;
      }
      div {
        grid-area: name;
        text-align: left;
        width: 100%;
        padding-left: .8rem;
      }
      p {
        grid-area: p;
        font-weight: 550;
        line-height: 1.5;
        letter-spacing: .4px;
        margin: 0;
        padding: .4rem .8rem;
        text-align: left;
        width: 100%;
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
      p {
      text-align: left;
      margin-right: auto;
      }

    `}</style>
  </>
}