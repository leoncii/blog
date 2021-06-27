import Whatsapp from '../../svg/footer/whatsapp'
import Link from 'next/link'

export default function Footer() {

  const whatsAppNumber = '59174361042'
  const textUrl = 'Hola%20leo...'
  const sendMsg = `https://wa.me/${whatsAppNumber}?text=${textUrl}`

  return <>
    <section>
      <div>
        <Link href={`https://wa.me/${whatsAppNumber}?text=${textUrl}`}>
          <a target='_blank'>
            <span><Whatsapp /></span>
          </a>
        </Link>
      </div>
      <div className='shading'></div>
      <small>Leonardo Torrico Becerra</small>
    </section>
    <style jsx>{`
    section {
     height: 528px;
     background: linear-gradient(217deg, #1a1414cc, #141111cc 70.71%),
            linear-gradient(127deg, #141414cc, #141414cc 70.71%),
            linear-gradient(336deg, #000000cc, #180404cc 70.71%);
     padding-bottom: 62.400px;
     padding-bottom: 150.400px;
     align-text: center;
     padding-top: 2rem;
     display: flex;
     flex-direction: column;
     text-align: center;
     justify-content: space-evenly;
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
    }
    small {
      color: var(--bg);
      text-shadow: 0px 0px 1px #fff,
                   0 0 3px darkblue;
    }
  `}</style>
  </>
}