
export default Error = () => {

  return <>
    <section>
      <h5>Oppsss... Parece que algo se rompio.</h5>
      <p>Por favor vuelve a intentarlo</p>
    </section>
    <style jsx>{`
    section {
        min-height: 100vh;
        margin:0 auto;
      }
    `}</style>
  </>
}