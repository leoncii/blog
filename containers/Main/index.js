import Banner from '../../svg/banner'
import Moon from '../../svg/moon'

export default function Main() {

  return <>
    <div className='container'>
      <main>

        <div className='hero__h1'>
          <h1>Creado por un propósito</h1>
        </div>
        <Moon />
      </main>
    </div>
    <style jsx>{`
    .container {
      display: grid;
      height: 720px;
      width: 100vw;
      background-color: var(--bg-0);
    }
    .hero__h1 {
      display: grid;
      width: 100%;
      position: absolute;
      place-content: center;
      align-items: space-between;
    }

   
    h1 {
      position: relative;
      color: var(--bg);
      top: 80px;
      width: 245px;
      display: block;
      place-content: center;
      text-align: center;
      font-weight: bolder;
      font-family: 'Rammetto One';
    }
    main {
      background-color: var(--dark);
      height: 100vh;
      text-content: center;
      width: 100vw;
    }
    img {
      position: absolute;
      top: 47px;
      max-height: 510px;
    }
    `}</style>
  </>
}