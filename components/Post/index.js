import Link from "next/link"
import { HeadPost } from "../HeadPost"

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post

  return (<article>
    <HeadPost meta={meta} />
    <Link href={"/blog" + link}>
      <a>Leer más 📖</a>
    </Link>
    <style jsx>
      {`
        article {
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
  </article>
  )
}
