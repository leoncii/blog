export function Chips() {
  
  const colors = ['#f1a832', "#1d1d1d", "#2e2cda", "pink", "#366b55", "rebeccapurple", "#8c2364", "green", "brown", "gray"]
  const chips = ["ReactJs", "JavaScript", "Html", "Css", "BlockChain", "NFT"]

  return (<>
    <section>
      <div>
        {
          chips.map(chip => {
            return <span key={chip}>{chip}</span>
          })
        }
      </div>
    </section>
    <style jsx>{`
      section {
        max-width: 300px;
        padding-top: 5rem;
        padding-bottom: 2rem;
        margin: 0 auto;
        max-width: 650px;
      }
      div {
        display: flex;
        color: #fff;
        flex-wrap: wrap;
        margin: .4rem 20px;
        place-content: center;
      }
      span {
        margin: .3rem ;
        padding: .2rem .4rem;
        border-radius: 20px 0 20px 0;
        align-self: center;
        font-weight: 400;
        letter-spacing: .3px;
        background-color: ${colors[0]};
      }
      span:nth-of-type(1) {
        background-color: ${colors[1]};
      }
      span:nth-of-type(2) {
        background-color: ${colors[2]};
      }
      span:nth-of-type(3) {
        background-color: ${colors[8]};
      }
      span:nth-of-type(4) {
        background-color: ${colors[4]};
      }
      span:nth-of-type(5) {
        background-color: ${colors[5]};
      }
      span:nth-of-type(6) {
        background-color: ${colors[1]};
      }
    `}</style>
  </>
  )
}
