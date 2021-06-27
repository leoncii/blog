import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../containers/Navbar'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Rammetto+One&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@1&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <div className="page-scroll-indicator">
            <div className="progress"></div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
