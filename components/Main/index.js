import Banner from '../../svg/banner'
import Moon from '../../svg/moon'
import { Space } from '../../svg/space'

export function Main() {
  return <>
    <div className='container'>
      <Moon />
      <main>
        <div className='hero'>
          <section>
            <h1>Blog T-Leo</h1>
            <p>
              Pin sen pum ci pan llo
            </p>
          </section>
        </div>
      </main>
      <Space />
    </div>
    <style jsx>{`
    div {
        display: flex;
        height: 70vh;
        width: 100%;
        padding-top: 48px;
        justify-content: space-around;
        text-align: center;
        background-color: var(--bg);
      }
      .hero {
        height: fit-content;
        background: transparent;
      }
      main {
        height: inherit;
        width: 100%;
        z-index: 1;
        position: absolute;
      }
      section {
        padding: 1% 6% 0;
      }
      .arrows {
        width: 50px;
        height: 50px;
        background-color: #222;
      }

      h1 {
        color: var(--copilot-dark);
        display: block;
        place-content: center;
        font-weight: 800;
        text-shadow: 0 -2px 1px var(--green);
      }

      p {
        color: var(--copilot-dark);
        font-weight: 600;
        text-shadow: 0 0px 5px var(--copilot-white);
      }

      @media only screen and (min-width: 787px) {
        .hero {
          text-align-last: start;
          padding-right: 15%;
          background: transparent;
        }
        .container {
          height: 77vh;
        }
        main {
          position: static;
        }
        {/* .container:nth(2) {
          height: 77vh;
        } */}
    }
  `}</style>
  </>
}