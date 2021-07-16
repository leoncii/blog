import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Leonardo from '../../svg/navbar/leonardo'
import Portal from '../../portal'
import { Button } from '../../components/Button'
import { useRouter } from 'next/router'

export function Nav({ signOut, signIn, session }) {
  const [modal, setModal] = useState(false)
  const router = useRouter()
  const handleLogout = () => {
    signOut()
  }

  return <>
    <nav>
      <Link href='/'>
        <a>
          <Leonardo roll='#f7f2f7' />
        </a>
      </Link>
      {
        session
          ? <>
            <div>
              <picture onClick={() => setModal(!modal)}>
                <Image
                  className='avatar'
                  width={32}
                  height={32}
                  src={session.user.image}
                  alt={session.user.name}
                />
                <Portal id={modal ? 'portal' : modal}>
                  <Button modal={modal} border warning onClick={handleLogout} >
                    Cerrar session
                  </Button>
                </Portal>
              </picture>
            </div>
          </>
          : <>
            <Link href='/signin'>
              <a>Sign in</a>
            </Link>
          </>
      }
    </nav>
    <style jsx>{`
      nav {
        display: flex;
        height: 51px;
        background-color:#1d1d1d;
        position: fixed;
        width: 100%;
        z-index: 999;
        justify-content: space-between;
        align-items:center;
        padding: 0 5%;
      }
      a:first-of-type {
        border: none;
      }
      a {
        border-radius: 5px;
        padding: ${!session ? ".2rem .6rem" : ".1rem .2rem"};
        font-weight: 400;
        cursor: pointer;
        color: var(--bg);
        letter-spacing:.2px;
      }
      a:last-of-type {
        display: ${router.route === '/signin' ? 'none' : 'block'};
      }
      div {
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
      }
      picture {
        cursor: pointer;
        user-select: none;
      }
  `}</style>
  </>
}