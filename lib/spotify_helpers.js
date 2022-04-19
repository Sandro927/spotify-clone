import SpotifyWebApi from "spotify-web-api-node"

export const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-private",
    "streaming",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read"
].join(",");

// console.log(scopes);

const params = {
    scope: scopes
};
console.log(params);
const queryParamString = new URLSearchParams(params);
// console.log(queryParamString.toString());

export const LOGIN_URL = "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyAPI = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
});


export default spotifyAPI;