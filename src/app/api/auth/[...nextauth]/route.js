import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import config from 'assets/config'

/** @todo add google provider */
const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: config.clientGitHub,
      clientSecret: config.clientGitHubSecret
    }),
    GoogleProvider({
      clientId: config.clientGoogle,
      clientSecret: config.clientGoogleSecret
    })
  ],
  secret: config.clientSecret,
  theme: {
    colorScheme: 'auto',
    logo: '/rundevs.png'
  },
  debug: false
})

export { handler as GET, handler as POST }
