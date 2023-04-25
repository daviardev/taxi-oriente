import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENTID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENTSECRET
    })
  ],
  secret: process.env.NEXT_PUBLIC_AUTHSECRET
}

export default NextAuth(authOptions)
