/* eslint-disable import/no-anonymous-default-export */
export default {
  clientGitHub: process.env.GITHUB_CLIENT_ID || '',
  clientGitHubSecret: process.env.GITHUB_CLIENT_SECRET || '',
  clientGoogle: process.env.GOOGLE_CLIENT_ID || '',
  clientGoogleSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  clientSecret: process.env.NEXTAUTH_SECRET || ''
}
