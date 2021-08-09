import { useEffect } from 'react'
import '../styles/globals.css'
import UserProvider from '../context/userProvider'
import { Provider } from 'next-auth/client'
import { Navbar } from '../containers/Navbar'
import { Footer } from 'components/Footer'
import { isBrowser } from 'utilities/isBrowser'

export default function MyApp ({ Component, pageProps }) {
  if (isBrowser()) {
    window.dataLayer = window.dataLayer || []
    useEffect(() => {
      function gtag () {
        if (window.dateLayer) {
          window.dataLayer.push(arguments)
        }
      }
      gtag('js', new Date())
      gtag('config', 'G-TQRHRT6ZW9')
    }, [window.dataLayer])
  }
  return (
    <Provider session={pageProps.session}>
      <UserProvider.Provider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserProvider.Provider>
    </Provider>
  )
}
