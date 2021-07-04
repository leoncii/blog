import { Loupe } from '../svgs/loupe'
export function Search({ onChange, search }) {
  return <>
    <div>
      <input
        type="text"
        onChange={onChange}
        value={search}
        placeholder='Buscar...'
      />
      <Loupe />
    </div>
    <style jsx>{`
  div {
    position: relative;
    height: 100%;
    width: 351px;
    margin: 0 auto;
    box-shadow: 0 10px 100px 0 var(--copilot-dark);
  }

  input {
    min-width: 100%;
    margin: 0 auto;
    padding: .4rem .8rem;
    border-radius: 5px;
    border: 1px solid #222;
    line-height: 1.2;
    letter-spacing: .4px;
    outline: none;
    font-size: 1.1rem;
    text-align:left;
  }
  `}</style>
  </>
}