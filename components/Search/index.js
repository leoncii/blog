
export default function Search({ onChange, search }) {

  return <>
    <input
      type="text"
      onChange={onChange}
      value={search}
      placeholder='¿Qué estás buscando?'
    />
    <style jsx>{`
  
  input {
    min-width: 337px;
    margin: 0 auto;
    padding: .4rem .8rem;
    border-radius: 3px;
    border: 1px solid #222;
    line-height: 1.2;
    letter-spacing: .4px;
    font-size: 1.1rem;
    text-align:center;
  }
  `}</style>
  </>
}