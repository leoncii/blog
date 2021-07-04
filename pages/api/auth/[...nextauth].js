import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import jwt from 'next-auth/jwt'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import nodemailer from 'nodemailer'

import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../../../firebase/firebaseConfig'

const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
).firestore()

// Email HTML body
const html = ({ url, site, email }) => {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail, as this is confusing because it seems
  // like they are supposed to click on their email address to sign in.
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`
  const escapedSite = `${site.replace(/\./g, "&#8203;.")}`

  // Some simple styling options
  const backgroundColor = "#f9f9f9"
  const textColor = "#444444"
  const mainBackgroundColor = "#ffffff"
  const buttonBackgroundColor = "#346df1"
  const buttonBorderColor = "#346df1"
  const buttonTextColor = "#ffffff"

  // Uses tables for layout and inline CSS due to email client limitations
  return `
<body style="background: ${backgroundColor};">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        <strong>${escapedSite}</strong>
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        Sign in as <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Sign in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`
}

// Email text body – fallback for email clients that don't render HTML
const text = ({ url, site }) => `Sign in to ${site}\n${url}\n\n`

export default NextAuth({
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
      async generateVerificationToken() {
        return 'qwertyuiopasdfghjklñzxcvbnm'
      },
      sendVerificationRequest: (data) => {
        const { identifier, url, token, baseUrl, provider } = data
        const { from, server } = provider
        const site = baseUrl.replace(/^https?:\/\//, "")
        return new Promise((resolve, reject) => {
          nodemailer.createTransport(server).sendMail(
            {
              to: identifier,
              from: from,
              subject: `Sign in to ${site}`,
              text: 'hola q tal',
              html: '<h1>ajdnakjndjasndjasnd</h1>',
            },
            (error) => {
              if (error) {
                logger.error("SEND_VERIFICATION_EMAIL_ERROR", email, error)
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
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === 'google' &&
        profile.verified_email == true) {
        console.log("true");
        return true
      } else {
        console.log("No");
        return false
      }
    },
    async session(session, user) {
      console.log('---------')
      console.log(user, session);
      console.log('---------')
      return session
    },
    async redirect(url, baseUrl) {
      console.log("URL", url);
      console.log("baseUrl", baseUrl);
      // baseUrl.replace('#', '')
      const q = baseUrl.replace('#', '')
      console.log("[QQQQ]", q);
      return `${url}`
    },
    // async jwt(token, user, account, profile, isNewUser) {
    //   // Add access_token to the token right after signin
    //   if (account?.accessToken) {
    //     token.accessToken = account.accessToken
    //   }
    //   return token
    // }
  }
})
