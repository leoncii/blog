import { useState, useContext, useEffect } from 'react'
import Login from '../../svg/login'
import { Context } from '../../context/userProvider'
import ScrollProgress from '../../utilities/ScrollProgress'
import { isBrowser } from '../../utilities/isBrowser'
import { Nav } from '../../components/Nav'
import { getUserLink, getRedirect } from '../../firebase/db'

export function Navbar() {
  const [roll, setRoll] = useState(false)
  const { session, loading, signIn, signOut } = useContext(Context)
  const handleLoginWithGoogle = () => {
    setRoll(!roll)
  }
  if (isBrowser()) {
    window.onscroll = () => ScrollProgress()
  }

  // console.log(getRedirect());

  return <>
    <Nav
      handleLoginWithGoogle={handleLoginWithGoogle}
      signIn={signIn}
      signOut={signOut}
      roll={roll}
      session={session}
    />
    {
      session | loading
        ? <div className='logged'>Loading...</div>
        : <div className='logged'>Hola 💖 {session?.user.email} 👌</div>
    }
    <style jsx>{`
    div {
      color: #fff;
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