import { useContext } from 'react'
import { Context } from '../../context/userProvider'
import ScrollProgress from '../../utilities/ScrollProgress'
import { isBrowser } from '../../utilities/isBrowser'
import { Nav } from '../../components/Nav'

export function Navbar () {
  const { session, signIn, signOut } = useContext(Context)
  if (isBrowser()) {
    window.onscroll = () => ScrollProgress()
  }

  return (
    <>
      <Nav
        signIn={signIn}
        signOut={signOut}
        session={session}
      />
    </>
  )
}
