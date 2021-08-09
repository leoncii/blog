import { Main } from '../components/Main'
import { Posts } from '../containers/Posts'
import Head from 'next/head'
export default function Home ({ props }) {
  return (
    <>
      <Head>
        <title>Home - Pimpumpam</title>
        <meta name='robots' content='index' />
        <meta name='description' content='Blog actualizado en castellano de javascript, NFT, Blockchain para la gente nueva' />
      </Head>
      <Main />
      <Posts />
    </>
  )
}
