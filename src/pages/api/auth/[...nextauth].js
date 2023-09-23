import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import config from 'assets/config'

/** @todo add google provider */
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: config.clientGitHub,
      clientSecret: config.clientGitHubSecret
    })
  ],
  secret: config.clientSecret,
  theme: {
    colorScheme: 'auto',
    logo: '/rundevs.png'
  },
  debug: false
})
