export function Chips ({ onClick, AllTags, active, setActive }) {
  const colors = ['#f1a832', '#1d1d1d', '#2e2cda', 'pink', '#366b55', 'rebeccapurple', '#8c2364', 'green', 'brown', 'gray']

  const handleChips = (chip, index) => {
    setActive(index + 1)
    onClick(chip)
    if (AllTags[active - 1] === chip) {
      setActive(null)
    }
  }

  return (
    <>
      <section>
        <div>
          {
            AllTags.map((chip, index) => {
              return (
                <button
                  onClick={() => handleChips(chip, index)}
                  key={chip}
                >
                  <span>{chip}</span>
                </button>
              )
            })
          }
        </div>
      </section>
      <style jsx>
        {`
      section {
        max-width: 300px;
        padding-top: 5rem;
        padding-bottom: 2rem;
        margin: 0 auto;
        max-width: 650px;
      }
      span {
        pointer-events: none;
      }
      div {
        display: flex;
        color: #fff;
        flex-wrap: wrap;
        margin: .4rem 20px;
        place-content: center;
      }
      button:nth-of-type(${active}) {
        border: 2px solid #222;
        opacity: .85;
      }
      button {
        margin: .3rem;
        cursor: pointer;
        color: #fff;
        border: 2px solid transparent;
        padding: .2rem .4rem;
        border-radius: 5px;
        align-self: center;
        font-weight: 400;
        letter-spacing: .3px;
        background-color: ${colors[0]};
      }
      button:nth-of-type(1) {
        background-color: ${colors[1]};
      }
      button:nth-of-type(2) {
        background-color: ${colors[2]};
      }
      button:nth-of-type(3) {
        background-color: ${colors[8]};
      }
      button:nth-of-type(4) {
        background-color: ${colors[4]};
      }
      button:nth-of-type(5) {
        background-color: ${colors[5]};
      }
      button:nth-of-type(6) {
        background-color: ${colors[1]};
      }
    `}
      </style>
    </>
  )
}
