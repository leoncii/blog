import { getSession } from 'next-auth/client'
import { Button } from '../../components/Button'
import Leonardo from '../../svg/navbar/leonardoRed'

export default function VerifyEmail() {

  return <>
    <div>
      <h1>Te mandamos un correo <span> 💌</span>.</h1>
      <p>Porfavor confirma que que quieres usar este email como registro de cuenta.</p>
      <h5>simple-pimpumpam.com</h5>
    </div>
    <style jsx>{`
      div {
        display: grid;
        place-content: center;
        height: 669px;
        width: 100%;
        justify-items: center;
      }
      @media only screen and (max-width: 468px) {
        div {
          padding: 0 2rem;
        }
      } 
    `}</style>
  </>
}


export async function getServerSideProps(ctx) {
  const { req, res } = ctx
  console.log(res);
  const session = await getSession({ req })

  if (session?.user && res) {
    res.writeHead(302, {
      Location: '/'
    })
    res.end()
    return { props: {} };
  }

  return {
    props: {}
  }
}