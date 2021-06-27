import { useState, useContext } from 'react'
import Login from '../../svg/login'
import Portal from '../../portal'
import Link from 'next/link'
import { Context } from '../../context/userProvider'
import ScrollProgress from '../../utilities/ScrollProgress'
import { isBrowser } from '../../utilities/isBrowser'
import LeonardoRed from '../../svg/navbar/leonardoRed'

export default function Navbar() {
  const [roll, setRoll] = useState(false)
  const { session, loading, signIn, signOut } = useContext(Context)

  const handleLoginWithGoogle = () => {
    setRoll(!roll)
  }
  if (isBrowser()) {
    window.onscroll = () => ScrollProgress()
  }


  return <>
    {
      roll
        ? <Portal id='__next'>
          <div className='portal'>
            <ol>
              <li>Contacto</li>
              <li>Destacados</li>
            </ol>
          </div>
        </Portal>
        : null
    }
    <nav>
      <div
        onClick={handleLoginWithGoogle}
        className='menu__container'
      >
        <div className='menu'></div>
      </div>
      <div>
        <Link href='/'>
          <a>
            <LeonardoRed roll={!roll ? "#f7f2f7" : '#f7f2f7'} />
          </a>
        </Link>
      </div>

      {
        session
          ? <>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
          : <>
            <button onClick={() => signIn()}>Sign in</button>
          </>
      }
    </nav>
    {
      session | loading
        ? <div className='logged'>Loading...</div>
        : <div className='logged'>Hola {session?.user.name} 👌 💖</div>
    }
    <style jsx>{`
    div{
      color: #fff;
    }
    nav {
      display: flex;
      height: 49px;
      background-color: ${!roll ? '#1d1d1d' : "#1d1d1d"};
      position: fixed;
      width: 100%;
      z-index: 999;
      justify-content: space-around;
      align-items:center;
      outline: 1px solid #f7f2f7;
    }
    button {
      border: 1px solid var(--dark);
      border-radius: 5px;
      padding: .4rem .8rem;
      font-weight: 600;
      cursor: pointer;
    }
    button:hover {
      background-color: var(--dark);
      color: #f7f2f7;
      border: 1px solid #f7f2f7;

    }
    .menu__container {
      width: 35px;
      height: 30px;
      cursor: pointer;
      text-align: -webkit-center;
    }
    .menu {
      width: 32px;
      height: 5px;
      margin-top: 6px;
      box-shadow: 0 5px 0 0 ${roll ? '#f7f2f7' : '#f7f2f7'},
                  0 -5px 0 0 ${roll ? '#f7f2f7' : '#f7f2f7'},
                  0 15px 0 0 ${roll ? '#f7f2f7' : '#f7f2f7'};
    }
    .portal {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      position: fixed;
      padding: 3rem 0;
      top: 49px;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 27vh;
      backdrop-filter: blur(50px);
      border-bottom: 1px solid var(--bg);
      box-shadow:  0 0 2px 0 var(--bg);
      background-color: var(--dark);
    }
    .logged {
      display: ${!session ? 'none' : 'flex'};
      position: fixed;
      height: 32px;
      top: 49px;
      width: 100vw;
      background-color: var(--dark);
      opacity: .7;
      justify-content:center;
      color: #f7f2f7;
      z-index: 1000;
    }
  `}</style>
  </>
}