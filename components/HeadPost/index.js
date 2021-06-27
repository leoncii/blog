import Image from 'next/image'

export const HeadPost = ({ meta }) => (
  <>
    <header>
      <img
        src={meta?.imgUrl.src}
        width={50}
        height={50}
        alt={meta.title}
      />
      <h1>{meta.title}</h1>
      <div>
        <p>{meta.description}</p>
        <span role='img' aria-label='one coffee'>
          ☕ {meta.readTime + ' min read'}
        </span>
        <span>{meta.date}</span>
      </div>
    </header>
    <style jsx>
      {`
        header {
          color: var(--bg);
          z-index: 1;
        }
        img {
          width: 100%;
          height: 100%;
        }
        h1 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #f89900;
          width: 270px;
          padding-top: 1.5rem;
          margin: 0 auto;
        }
        span {
          color: var(--bg-0);
          margin-right: 1rem;
          font-size: .7rem;
        }
        p {
          color: var(--dark-0);
        }
        div {
          margin-bottom: 1rem;
          text-align: center;
        }
      `}
    </style>
  </>
)
