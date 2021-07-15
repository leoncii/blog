import { providers, signIn, getSession, csrfToken } from "next-auth/client"
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Message } from '../../components/svgs/message'
import Head from 'next/head'

export default function Signin({ providers, csrfToken }) {
  return <>
    <Head>
      <meta name="robots" content="" />
      <title>Iniciar sessión en Pim Pum Pam - Blog</title>
      <meta name="robots" content="index" />
      <meta name="description" content="Blog actualizado en castellano de javascript, NFT, Blockchain para la gente nueva" />

    </Head>
    <section>
      <h3>Iniciar sessión en blog</h3>
      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          <Message />
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Email address'
          />
        </label>
        <button type='submit' >Login with email</button>
        {
          Object.values(providers).map((provider) => {
            if (provider.name === "Email") {
              return;
            }
            return (
              <div
                key={provider.id}
                className='container'
                onClick={() => signIn(provider.id)}
              >
                <div>
                  <button
                    type='button'
                  >
                    Sign in with {provider.name}
                  </button>
                </div>
                <div className='google_container'>
                  <div className='google'></div>
                </div>
              </div>
            )
          })
        }
      </form>
    </section>
    <Footer
      height="20px"
    />
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        height: 90vh;
        align-items: center;
        margin: 64px auto auto;
        max-height: calc(100vh - 112px);
        overflow-y: auto;
        padding-top: 64px;
      }
      form {
        padding-top: 15vh;
        display: flex;
        flex-direction: column;
        width: 303px;
      }
      input {
        padding: .4rem .7rem;
        border: none;
        width: 100%;
        border-left: 1px solid rgba(22,24,35,.12);
      }
      button{
        border: none;
        border-radius: 3px;
        padding: .4rem .8rem;
        width: 100%;
        cursor: pointer;
        background-color: #fff;
        height: inherit;
      }

      form > button { 
        border: 1px solid #4862f51e;
        border-radius: 3px;
        background-color: #fff;
        border-left: 1px solid rgba(22,24,35,.12);
      }

      label {
        max-height: 44px;
        background-color: #fff;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
      }

      .container {
        display: flex;
        height: 100%;
        cursor: pointer;
        background-color: #fff;
        width: 100%;   
        border: 1px solid rgba(22,24,35,.12);   
        align-items: center;
        flex-direction: row-reverse;
        margin-top: 32px;
      }
      .container > div:nth-child(1) {
        margin: 0 auto;
      }
      .google_container {
        width: 44px;
        height: 44px;
        box-sizing: border-box;
        display: flex;
        border-right: 1px solid #222;
        justify-content: center;
        align-items: center;
        border-right: 1px solid rgba(22,24,35,.12);
      }
      .google {
        background-size: contain;
        width: 24px;
        height: 24px;
        justify-content: center;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAjVBMVEVHcEwwnU/VPjYvnk/VPjUvnVDWSDRQcKehaUFQcKhOc6Iunk7VPTXVPjVQcKdQcKjZWDMvnU7VPTXvtikwnVDWPTXvtSnurSpQcKfVPjYunk7ttChQcajstSgwn0zttCjvtShQcKlQcKgvnk/VPjbvtSnjfi7bsy07n009inXYTTSDqD6bqzqnrTdTokc44COHAAAAInRSTlMAPc/b5r4jPxC/oJBVkIjlQGOjtyC/0/cggIB7X2BQoJ/Psru6sQAAAUhJREFUSMftlduWgiAUhjGBoRTT0uw4B8Gp5vT+jzeGOggCC5vb/iuX6/vYe6MoAI/cFRLTGeScw4LGHnha8EHgCk/BRZwK5YZAa2Ok4OZYDDKz8DNiFqbyu0HXNMY4jVfQxWOJp3IRaOUB/NvGIYGpjT+9d/zO831Y1+WHWN+Tx3WTpgjEnsKpbg0KvDsSKWWB7ZMeRdi0wkbeWVRa3hShbIW1Q1gqQsvXB4dQ/U/oWnr1FjyGVmd4aYWzfHOSeZ9lK8wV4SD4r8ve8Iw6IVFP2235T8ZYPuKPXUtH/VGffxqeIVuBaqt9X74vTERvKqlMIzRBrEtETLzeEQBBL7AwkzeReVNFIiaV6DnIgywKm+urcQK1KTXX8Z72WxuaDWbhG8NSgy2sB29v5DPHUc3HRVDgPt0BmoSLKlmEbvOHYZSRxx/8rvwCaQpYY51gRIUAAAAASUVORK5CYII=");
      }
    `}</style>
  </>
}

export async function getServerSideProps(ctx) {
  const { req, res } = ctx
  const session = await getSession({ req })

  if (session?.user && res) {
    res.writeHead(302, {
      Location: '/'
    })
    res.end()
    return { props: {} };
  }

  return {
    props: {
      session: null,
      providers: await providers(ctx),
      csrfToken: await csrfToken(ctx)
    }
  }
}