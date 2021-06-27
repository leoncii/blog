import { HeadPost } from '../../components/HeadPost/'

export function BlogPost({ children, meta }) {
  const { isActive } = meta
  return (
    <>
      <div>
        <HeadPost meta={meta} />
        <article>{children}</article>
      </div>
      <style jsx>{`
        article {
          text-align: left;
          margin: 0 auto;
          font-family: 'JetBrains Mono', monospace; 
          padding-bottom: 120px;
      }
      div {
        padding-top: ${isActive ? '49px' : '0px'};
      }
      `}</style>
    </>
  )
}
