export const HeadPost = (props) => {
  const { meta, isActive } = props
  const { imgUrl, title, description, readTime, date } = meta
  return (
    <>
      <header>
        <picture>
          <img
            src={imgUrl}
            width={50}
            height={50}
            alt={title}
          />
        </picture>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <p>{description}</p>
          <span role='img' aria-label='one coffee'>
            ☕ {readTime + ' min read'}
          </span>
          <span>{date}</span>
        </div>
      </header>
      <style jsx>
        {`
          header {
            color: var(--bg);
            z-index: 1;
            display: flex;
            flex-direction: column;
            padding-top: ${isActive ? '96px' : '0px'};
            align-items: center;
          }
          picture {
            max-width: fit-content;
            padding: .3rem;
            height: -webkit-fill-available;
            min-width: -webkit-fill-available;
            height: 250px;
          }
          img {
            width: 100%;
            object-fit: contain;
            height: 100%;
            clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
          }
          h1 {
            font-size: 2.2rem;
            font-weight: 700;
            color: #f89900;
            margin: 0 auto;
            max-width: 470px;
            min-width: 270px;
            padding-top: 1.5rem;
            background-color: ${isActive ? '#f2f2ef' : '#1d1d1d'};
          }
          div {
            padding:0 1rem;
            background-color: ${isActive ? '#f2f2ef' : '#1d1d1d'};
            padding-bottom: 1rem;
            text-align: center;
          }
          span {
            margin-right: 1rem;
            color: ${!isActive ? '#f2f2ef' : '#1d1d1d'};
            font-size: .7rem;
          }
          p {
            color: ${!isActive ? '#f2f2ef' : '#1d1d1d'};
            opacity: .7;
          }
        `}
      </style>
    </>
  )
}
