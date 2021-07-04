import { Main } from '../components/Main'
import { Posts } from '../containers/Posts'
import { Footer } from '../components/Footer'
import { getSession, getProviders } from 'next-auth/client'

export default function Home({props}) {
  //rigid token strong follow receive actor release arm feature provide exhaust lumber
  return <>
    <div id='portal'></div>

    <Main />

    <Posts />

    <Footer />
  </>
}

export async function getServerSide(ctx) {
  Promise.all([getProviders, getSession])
    .then(([providers, getLogin]) => {

      console.log('object');
      console.log(getLogin());
      console.log(providers());
      console.log('object');
      return { props: {} }
    }).catch(e => console.log(e))
  const providers = await getProviders()
  const getLogin = await getSession()
  console.log('object....');
  console.log(getLogin);
  console.log(providers);
  console.log('object.....');
  return {
    props: {
      providers,
      getLogin
    }
  }
}
