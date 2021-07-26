export function HeroText () {
  return (
    <>
      <div>
        <h1>Blog T-Leo</h1>
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
        color: var(--copilot-dark);
        display: block;
        place-content: center;
        font-weight: 800;
        text-shadow: 0 -1px 3px var(--green);

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
    `}
      </style>
    </>
  )
}
