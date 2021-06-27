import { useState, useEffect } from 'react'
import { newLeadWithEmail } from '../../firebase/db'
import { useSession } from 'next-auth/client'

export default function Form() {

  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [successLead, setSuccessLead] = useState(false)
  const [lead, setLead] = useState({
    email: ''
  })
  const [session, _] = useSession()

  // let r = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g)

  const reg = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  const a = reg.test('kjasndjkasbdjkabs@gmail.com')

  const handleFormChange = e => {
    setLead({
      ...lead,
      [e.target.name]: e.target.value
    })
  }

  const handleFormClick = (e) => {
    e.preventDefault()
    setDisabled(true)
    if (lead.email < 4) {
      return null
    }
    newLeadWithEmail(lead, lead)
      .then(e => setSuccessLead(true))
      .catch(e => console.log(e))

  }
  const toggleChange = () => {
    setChecked(true)
  }

  useEffect(() => {
    if (!session?.user.name) {
      return null;
    }
    if (session?.user.name) {
      setSuccessLead(true)
    }
  }, [session])
  useEffect(() => {
    lead.email.includes('@') && lead.email.includes('.')
      ? setDisabled(false)
      : setDisabled(true)
  }, [lead.email])


  return <>
    <section>
      <form
        onSubmit={handleFormClick}
      >
        {
          !session?.user.name
          && <h2>Apúntate y un correo te llegara cada vez que suba un articulo nuevo</h2>
        }
        <h3>Gracias, por suscribirte!</h3>
        {
          successLead
            ? <span>no se rompio nada ✨🍌.</span>
            : <>
              <div>
                <input
                  id="standard-basic"
                  type='text'
                  name='email'
                  label="Email"
                  value={lead.email}
                  onChange={handleFormChange}
                />
              </div>
              <button
                disabled={disabled}
                type="submit"
              >
                Me apunto
              </button>
              <span id="my-helper-text">We'll never share your email.</span>
            </>
        }

      </form>
    </section>
    <style jsx>{`
    section {
      border-radius: 10px;
      padding-bottom: 2rem;
      max-width: 615px;
      margin: 0 auto;
      text-align-last: center;
    }
    form {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 0 auto;
      align-items: center;
      width: 325px;
    }
    h2{
      color: var(--dark-green);
    }
    input {
     min-width: 337px;
     padding: 4px 8px;
     border-radius: 3px;
     border: 1px solid #222;
     line-height: 1.2;
     letter-spacing: .4px;
     font-size: 1.1rem;
     height: 40px;
     margin-bottom: .4rem;
    }
    button {
      padding: 4px 8px;
      border-radius: 5px;
      background-color: yellow;
      border: none;
      min-width: 337px;
      height: 40px;
      z-index: 10;
    }
    button:hover { 
      backgroundColor: #f50057;
      color: #222;
      border: 1px solid #222;
    }
    button:disabled { 
      pointerEvents: none;
      opacity: .4;
      backgroundColor: #e0d2d2;
    }
     
    .checkbox {
      min-width: 32px;
      margin-right: 1rem;
    }
    `}</style>
  </>
}