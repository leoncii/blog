import Link from "next/link"
import { HeadPost } from "../HeadPost"

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post

  return (<article>
    <HeadPost meta={meta} />
    <div>
      <Link href={`/blog${link}`}>
        <a>Leer más 📖</a>
      </Link>
    </div>
    <style jsx>
      {`
        article {
          display: grid;
          margin-bottom: 3rem;
          background-color: var(--dark);
          padding: 20px;
        }   
        a {
          color : var(--bg);
          border-bottom: 1px solid var(--bg-0);
        }
      `}
    </style>
  </article >
  )
}
