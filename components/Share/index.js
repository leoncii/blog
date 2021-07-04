import { FacebookShareButton, TwitterShareButton } from 'react-share'

export function Share({ onClick, likes, setUrlFirebase, verify }) {
  return <>
    <section>
      <div className='bonico'>
        <div className='likes' onClick={onClick}>
          <span> 👌 {likes}</span>
        </div>
        <div className='share'>
          <h3>Comparte 💖</h3>
          <small>
            <FacebookShareButton
              url='google.com'
              text="Check out this website: www.google.com"
            >
              <span>Facebook</span>
            </FacebookShareButton>

            <TwitterShareButton
              url='google.com'
              text="Check out this website: www.google.com"
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
        cursor: pointer;
        pointer-events: ${verify ? 'none' : 'auto'};
        align-self: center;
      }
      span {
        margin-right: 5px;
        font-size: 14px;
        font-weight: 300px;
      }
      small {
        align-self: center;
      }
    `}</style>
  </>
}