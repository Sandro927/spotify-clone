import { getProviders, signIn } from "next-auth/react"

function login(props) {

    const handleSignInClick = (e) => {
        console.log(props)
        signIn(props.provider.spotify.id, { callbackUrl: "/" })
    }
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img src="https://links.papareact.com/9xl" className="w-52 mb-5" alt="Spotify logo"/>
            <div>
                <button className="bg-[#18D860] text-white p-5 rounded-full" onClick={handleSignInClick}>Login with Spotify</button>
            </div>
        </div>
    )
}

export default login

export async function getServerSideProps() {
    const provider = await getProviders();
    return {
        props: {
            provider
        }
    };
}