import fs from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'
import { text, html } from '../email'


export const SendVerificationEmail = data => {

  const { identifier: email, url, token, baseUrl, provider } = data
  const { from, server } = provider
  const site = baseUrl.replace(/^https?:\/\//, "")
  const file = path.resolve(process.cwd() + '/public/leonardo.png')

  const base64file = fs.readFileSync(file, 'base64')
  return new Promise((resolve, reject) => {

    nodemailer.createTransport(server).sendMail(
      {
        to: email,
        from: from,
        subject: `Gracias pro registrarte ${site}`,
        text: text({ url, site }),
        html: html({ url, site, email, base64file }),
        attachDataUrls: true,
      },
      (error) => {
        if (error) {
          console.error("SEND_VERIFICATION_EMAIL_ERROR", email, error)
          return reject(new Error("SEND_VERIFICATION_EMAIL_ERROR", error))
        }
        return resolve()
      }
    )
  })

}