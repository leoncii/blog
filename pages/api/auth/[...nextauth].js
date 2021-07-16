import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import firebase from 'firebase/app'
import { firebaseConfig } from '../../../firebase/firebaseConfig'
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import 'firebase/firestore'
import { SendVerificationEmail } from '../../../email/sendVerification'
import { session } from 'next-auth/client'

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
      sendVerificationRequest: (data) => SendVerificationEmail(data)
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
    verifyRequest: '/verify-email',
    error: '/error',
  },
  callbacks: {
    async signIn(user, account, profile) {
      if (account.type === 'email') {
        if (user.emailVerified || profile.verificationRequest) {
          return true
        }
      }
      if (!profile.verified_email) {
        console.log("USER", user);
        console.log('------------')
        console.log("account ", account);
        console.log('------------')
        console.log("profile", profile);
        console.log('------------')
        return "/error"
      }
      if (account.provider === 'google' &&
        profile.verificationRequest == true) {
        console.log('GOOGLE')
        console.log('GOOGLE')
        console.log('GOOGLE')
        console.log('GOOGLE')
        console.log('GOOGLE')
        return "/"
      } else {
        return '/'
      }
    },
    async session(session, token) {
      console.log("SESSION", session)
      console.log("TOKEN", token)
      return session
    },
    async redirect(url, baseUrl) {
      return baseUrl
    },
  }
}

export default (req, res) => NextAuth(req, res, options)
