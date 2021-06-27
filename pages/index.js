import Main from '../containers/Main'
import { Posts } from '../containers/Posts'
import Footer from '../containers/Footer'
import { getSession } from 'next-auth/client'

export default function Home(props) {
  //rigid token strong follow receive actor release arm feature provide exhaust lumber
  return <>
    <div id='portal'></div>

    <Main />

    <Posts />

    <Footer />
  </>
}

export async function getServerSide() {
  // const user = await fetch('http://localhost:3000/pages/api/session')
  // console.log("GETSTATICPROPS:", user);
  return { props: {} }
}
