import Banner from '../../svg/banner'
import Moon from '../../svg/moon'

export function Main() {
  return <>
    <div className='container'>
      <main>
      <Moon />
        <div className='hero'>
          <section>
            <h1>Creado por un propósito</h1>
            <p>
              Cuída mis enseñanzas y no te alejes de ellas, que de ellas depende tu vida.
            </p>
          </section>
        </div>
      </main>
    </div>
    <style jsx>{`
    .container {
      display: flex;
      height: 100vh;
      width: 100%;
      justify-content: space-around;
      text-align: center;
      background-color: var(--bg-0);
    }
    main {
      background-color: var(--dark);
      height: inherit;
      width: 100%;
    }
    .hero {
      padding-top: 88px;
      display: flex;
      width: 100%;
      align-items: space-between;
      flex-direction: column;
    }
    section {
      padding: 1% 6% 0;
    }
   
    h1 {
      color: var(--bg);
      display: block;
      place-content: center;
      font-weight: 800;
    }

    p {
      color: var(--copilot-white);
    }
    `}</style>
  </>
}