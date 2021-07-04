const sgMail = require('@sendgrid/mail')
const path = require('path')
const fs = require('fs')


const file = path.resolve(__dirname, 'email.html')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// fs.readFile(file, 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.trim())
//   // sendEmail(data.trim())
// })


fs.readFile(file, 'utf8',(err, data) => {
  if (err) {
    console.log(err)
  }

  if (data) {
    const msg = {
      to: 'leonardotobe94@gmail.com', // Change to your recipient
      from: 'leonardotobe94@gmail.com', // Change to your verified sender
      subject: 'Gracias por suscribirte a la newsletter 🙌',
      text: 'Gracias por suscribirte a la newsletter 🙌',
      hideWarnings: true,
      html: data,
    }

    sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
      console.error(error.body.errors)
    })

  }
})

const sendEmail = (html) => {
  const msg = {
    to: 'leonardotobe94@gmail.com', // Change to your recipient
    from: 'leonardotobe94@gmail.com', // Change to your verified sender
    subject: 'Gracias por suscribirte a la newsletter 🙌',
    text: 'Gracias por suscribirte a la newsletter 🙌',
    html,
  }

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
      console.error(error.body.errors)
    })
}

// const msg = {
//   to: 'leonardotobe94@gmail.com', // Change to your recipient
//   from: 'leonardotobe94@gmail.com', // Change to your verified sender
//   subject: 'Gracias por suscribirte a la newsletter 🙌',
//   text: 'Gracias por suscribirte a la newsletter 🙌',
//   html: '<div><h1>Hola</h1><strong style={color:red}>Pues hacer clic en este enlace para verificar tu registro <a href="google.com">Ir a google</a></strong><small>Email sent using SendGrid.com</small></div>',
// }




