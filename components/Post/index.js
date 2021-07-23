import Link from 'next/link'
import { HeadPost } from '../HeadPost'

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post

  return (
    <>
      <Link href={`/blog${link}`}>
        <a>
          <article>
            <HeadPost meta={meta} />
            <div>
              Leer más 📖
            </div>
          </article>
        </a>
      </Link>
      <style jsx>
        {`
        article {
          display: grid;
          margin-bottom: 3rem;
          min-width: -webkit-fill-available;
          background-color: var(--copilot-white);
          border-radius: 7px;
        }   
        div {
          background-color: var(--dark);
          min-height: 32px;
        }
        a {
          color : var(--bg);
          border-bottom: 1px solid var(--bg-0);
        }
      `}
      </style>
    </>
  )
}
