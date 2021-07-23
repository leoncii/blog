import { Comments } from '../Comments'
import { HeadPost } from '../../components/HeadPost/'
import { ShareBar } from '../ShareBar'
import Head from 'next/head'

export function BlogPost ({ children, meta, seo }) {
  const { isActive } = meta
  const { name, title, content } = seo
  return (
    <>
      <Head>
        <meta name={name} content={content} />
        <title>{title}</title>
      </Head>
      <div>
        <HeadPost isActive meta={meta} />
        <article>{children}</article>
        <Comments />
      </div>
      <ShareBar />
      <style jsx>{`
        div {
          padding-top: ${isActive ? '49px' : '0px'};
          place-items: center;
          display: flex;
          flex-direction: column;
          max-width: 750px;
          justify-content: center;
          align-content: center;
          margin: 0 auto;
        }
        article {
          text-align: left;
          margin: 0 auto;
          font-family: 'JetBrain Mono', monospace; 
          padding-bottom: 120px;
          width: -webkit-fill-available;
          padding: 0 2rem;
        }
      `}
      </style>
    </>
  )
}
