import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import jwt from 'next-auth/jwt'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: '781819236641-is9m52drcumlnfpeni2l2vcavd1khvpp.apps.googleusercontent.com',
      clientSecret: 'Nl0LlmdZX5pR9_8RnEKEKdp9'
    })
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    jwt: true,
    secret: process.env.JWT_SECRET
  },
  callbacks: {
    async signIn(user, account, profile) {
      return true
    },
    async session(session, user) {
      // console.log('---------')
      // console.log(user, session);
      // console.log('---------')
      return session
    },
    async redirect(url, baseUrl) {
      return baseUrl
    },
  }
})
