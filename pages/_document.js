import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://res.cloudinary.com' crossOrigin='true' />
          <link rel='icon' href='https://res.cloudinary.com/djc1umong/image/upload/v1626461944/pim_wfo8gb.svg' type='image/svg' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link href='https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <div className='page-scroll-indicator'>
            <div className='progress' />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
