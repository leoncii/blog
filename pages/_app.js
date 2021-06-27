
import { useContext, useEffect } from 'react'
import '../styles/globals.css'
import { isBrowser } from '../utilities/isBrowser'
import UserProvider from '../context/userProvider'
import { Provider } from 'next-auth/client'
import Navbar from '../containers/Navbar'
import ShareBar from '../containers/ShareBar'

function MyApp({ Component, pageProps }) {

  return <Provider session={pageProps.session}>
    <UserProvider.Provider>
      <Navbar />
      <Component {...pageProps} />
      <ShareBar />
    </UserProvider.Provider>
  </Provider>
}

export default MyApp
