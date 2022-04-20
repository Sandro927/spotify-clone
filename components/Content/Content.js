import { useSession } from 'next-auth/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { useRecoilValue, useRecoilState } from 'recoil';
import { playlistIdState } from '../../atoms/playlistAtoms';
import useSpotify from '../../hooks/useSpotify';


function Content() {

  const colours = [
    "indigo",
    "blue",
    "green",
    "red",
    "yellow",
    "pink",
    "purple",
  ]

  const { data: session } = useSession();
  const [colour, setColour] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const spotifyAPI = useSpotify();
  const [playlist, setPlaylist] = useRecoilState(playlistIdState);
  console.log(playlist);

  useEffect(() =>{
    setColour(shuffle(colours).pop());
  }, [playlistId])

  useEffect(() =>{
    spotifyAPI.getPlaylist(playlistId)
      .then(data => {
        setPlaylist(data.body)
      })
      .catch(err => {
        console.log(err);
      })
  }, [spotifyAPI, playlistId])

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className={`flex items-center bg-green-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2`}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU" 
            className="rounded-full w-10 h-10" 
            alt="User Avatar" 
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black from-green-500 h-80 text-white p-8`}>
        <img className="h-44 w-44 shadow-2xl" src={playlist?.images?.[0]?.url} alt="Playlist Avatar"/>
        <div>
          <p className="text-white">PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{playlist?.name}</h1>
        </div>
      </section>
    </div>
  )
}

export default Content