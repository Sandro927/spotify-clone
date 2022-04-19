import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/github";
import { LOGIN_URL } from "../../../lib/spotify_helpers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL
    }),
  ],
})