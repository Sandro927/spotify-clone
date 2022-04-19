import React from 'react'

function login() {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
        <img src="https://links.papareact.com/9xl" className="w-52 mb-5" alt="Spotify logo"/>
        <div>
            <button className="bg-[#18D860] text-white p-5 rounded-full">Login with Spotify</button>
        </div>
    </div>
  )
}

export default login