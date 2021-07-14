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
    .container {
      display: flex;
      height: 70vh;
      width: 100%;
      justify-content: space-around;
      text-align: center;
      background-color: var(--bg);
    }
    main {
      height: inherit;
      width: 100%;
      z-index: 1;
    }
    .hero {
      padding-top: 138px;
      display: flex;
      width: 100%;
      align-items: space-between;
      flex-direction: column;
      height: inherit;
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

      @media only screen and (min-width: 768px) {
        .hero {
          text-align-last: start;
        }
        .container {
          height: 90vh;
        }
    }
  `}</style>
  </>
}