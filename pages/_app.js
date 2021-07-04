
import '../styles/globals.css'
import UserProvider from '../context/userProvider'
import { Provider } from 'next-auth/client'
import { Navbar } from '../containers/Navbar'


export default function MyApp({ Component, pageProps }) {

  return <Provider session={pageProps.session}>
    <UserProvider.Provider>
      <Navbar />
      <Component {...pageProps} />
    </UserProvider.Provider>
  </Provider>
}

