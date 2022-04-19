import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyAPI, { LOGIN_URL } from "../../../lib/spotify_helpers";

async function refreshAccessToken(token) {
    try {
        spotifyAPI.setAccessToken(token.accessToken);
        spotifyAPI.setRefreshToken(token.refreshToken);

        const { body: refreshedToken } = await spotifyAPI.refreshAccessToken();
    } catch (error) {
        console.log(error);
        return {
            ...token,
            error: "RefreshAccessTokenError",
            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshAccessToken
        }
    }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
      login: '/login'
  },
  callbacks: {
      async jwt({ token, account, user}) {
          if (account && user) {
              return {
                  ...token,
                  accessToken: account.access_token,
                  refreshToken: account.refresh_token,
                  username: account.providerAccountId,
                  accessTokenExpires: account.expires_at * 1000
              }
          }
          //Returns the previous token if the current token has not yet expirs
          if (Date.now() < token.accessTokenExpires) {
              return token;
          }
          //if token is expired
          return await refreshAccessToken(token)

      },
      async session({session, token}) {
          session.user.accessToken = token.accessToken,
          session.user.refreshToken = token.refreshToken,
          session.user.username = token.username

          return session;
      }
  }
});