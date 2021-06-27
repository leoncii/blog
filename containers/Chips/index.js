export default function ChipsPlayground() {

  const colors = ["red", "blue", "yellow", "pink", "black", "rebeccapurple", "orange", "green", "brown", "gray"]
  const label = ["ReactJs", "JavaScript", "Html", "Css"]

  return (<>
    <section>
      <div>
        <span>{label[0]}</span>
        <span>{label[1]}</span>
        <span>{label[2]}</span>
        <span>{label[3]}</span>
      </div>
    </section>
    <style jsx>{`
      section {
        max-width: 320px;
        margin: 0 auto;
        padding-bottom: 4rem;
        padding-top: 5rem;
      }
      div {
        display:flex;
        max-width: fit-content;
        color: #fff;
        flex-wrap: wrap;
        padding: .4rem .8rem;
        place-content: center;
      }
      span {
        margin: .1rem ;
        padding: .3rem .6rem;
        border-radius: 20px 0 20px 0;
        align-self: center;
        letter-spacing: 1px;
        font-weight: bold;
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
    `}</style>
  </>
  )
}
