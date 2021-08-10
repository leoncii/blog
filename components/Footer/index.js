import Link from 'next/link'
import { useRouter } from 'next/router'

export function Footer () {
  const { route } = useRouter()

  return (
    <>
      <section>
        <small>Leonardo Torrico Becerra</small>
      </section>
      <style jsx>{`
    section {
     height: ${route === '/' ? '100vh' : '200px'};
     background: linear-gradient(217deg, #1a1414cc, #141111cc 70.71%),
            linear-gradient(127deg, #141414cc, #141414cc 70.71%),
            linear-gradient(336deg, #000000cc, #180404cc 70.71%);
     padding-bottom: 62.800px;
     padding-top: 2rem;
     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: 1fr;
     place-items: center;
     padding-left:1rem;
     padding-right:1rem;
     color: var(--light-green);
    }
    h4 {
      font-size: 2rem;
      color: #9c039c;
      font-weight: bolder;
      letter-spacing: 1px;
    }
    span {
      cursor: pointer;
      margin-top: 2rem;
    }
    small {
      color: var(--bg);
      text-shadow: 0 0 3px darkblue;
    }
  `}
      </style>
    </>
  )
}
