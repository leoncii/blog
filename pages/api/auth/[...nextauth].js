import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import nodemailer from 'nodemailer'
import { text, html } from '../../../email'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../../../firebase/firebaseConfig'
import path from 'path'
import fs from 'fs'

const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
).firestore()

const options = {
  providers: [
    Providers.Google({
      clientId: '781819236641-is9m52drcumlnfpeni2l2vcavd1khvpp.apps.googleusercontent.com',
      clientSecret: 'Nl0LlmdZX5pR9_8RnEKEKdp9',
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: (data) => {
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
    })
  ],
  adapter: FirebaseAdapter(firestore),
  secret: process.env.AUTH_SECRET,
  session: {
    jwt: true,
    secret: process.env.JWT_SECRET
  },
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn(user, account, profile) {
      if (!profile.verified_email) {
        return false
      }
      if (account.provider === 'google' &&
        profile.verified_email == true) {
        return true
      } else {
        return true
      }
    }
  }
}

export default (req, res) => NextAuth(req, res, options)
