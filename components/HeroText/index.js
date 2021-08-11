export function HeroText () {
  return (
    <>
      <div>
        <h1>Blog T.Leo</h1>
        <p>
          Pim sen pum ci pam llo
        </p>
      </div>
      <style jsx>{`
      div {
        height: fit-content;
        background: transparent;
        max-width: 670px;
        z-index: 1;
        pointer-events: none;
        position: absolute;
        margin: 3% 6% 0;
      }
      h1 {
        display: block;
        place-content: center;
        font-weight: 800;
        min-width: 20px;
        text-shadow: 0 0px 3px var(--copilot-white);
        font-size: 4.2rem;
      }

      p {
        color: var(--copilot-dark);
        font-weight: 600;
        text-shadow: 0 0px 2px var(--copilot-white);
      }
      @media only screen and (min-width: 787px) {
        div {
          background: transparent;
          position: static;
          height: 77vh;
          width: 800px;
        }
    }
      @media only screen and (max-width: 787px) {
        h1 {
          text-shadow: none;
          color: #dfdede;
          background-color: rgba(0,0,0,.4);
          padding: 0 8px 0 8px;
        }
        div {
          padding-top: 2rem;
          margin:0;
        }
        p {
          padding-top: 2.5rem;
          letter-spacing: 1.2px;
          text-shadow: 1px solid #eee;
          color: var(--light);
        }
    }
    `}
      </style>
    </>
  )
}
