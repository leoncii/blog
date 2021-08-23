import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { useRouter } from 'next/router'

export function Share ({ onClick, likes, setUrlFirebase, verify, session, ...restOfProps }) {
  const { pathname } = useRouter()
  return (
    <>
      <section>
        <div className='bonico'>
          <div className='share'>
            <small>
              <FacebookShareButton
                url={`https://simple-pimpumpam.com${pathname}`}
                text='Check out this website: www.google.com'
              >
                <span>Facebook</span>
              </FacebookShareButton>
            </small>
            <small>
              <TwitterShareButton
                url={`https://simple-pimpumpam.com${pathname}`}
                text='Check out this website: www.google.com'
              >
                <span>Twitter</span>
              </TwitterShareButton>
            </small>
          </div>
        </div>
      </section>
      <style jsx>{`
      section {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: rgb(0,0,0);
        color: #fff;
        z-index: 1;
        height: 48px;
      }
      .share {
        display: flex;
      }
      .bonico {
        display: flex;
        justify-content: space-around;
        padding-bottom: 8px;
        padding-top: 8px;
        text-align: center;
      }
      h3 {
        text-align:center;
        margin: 3px;
      }
      .likes {
        display: ${!setUrlFirebase ? 'none' : 'flex'};
        cursor: ${!session ? 'none' : 'pointer'};
        pointer-events: ${!session ? 'none' : 'auto'};
        align-self: center;
      }
      span {
        margin-right: 5px;
        font-size: 14px;
        font-weight: 300px;
        width: 100%;
        align-self: center;
      }
      small {
        align-self: center;
      }
      .likes small:first-of-type {
        color: red;
      }
    `}
      </style>
    </>
  )
}
