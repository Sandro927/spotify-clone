import { signIn } from "next-auth/react";
import spotifyApi from '../lib/spotify_helpers'

const spotifyApi =new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  })

function useSpotify() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (session) {
            if(session.error === 'RefreshAccessTokenError') {
                signIn();
            }

            spotifyApi.setAccessToken(session.user.setAccessToken);
        }
    }, [session]);

  return spotifyApi;
}

export default useSpotify