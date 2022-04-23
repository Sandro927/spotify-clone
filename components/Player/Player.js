import { useSession } from 'next-auth/react';
import React from 'react';
import { currentTrackIdState, isPlayingState } from '../../atoms/songAtom';
import useSpotify from '../../hooks/useSpotify';
import { useRecoilState } from 'recoil'
import { useState } from 'react';

function Player() {

    const spotifyAPI = useSpotify();
    const { data: session, status } = useSession(); 
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying, setisPlaying] = useRecoilState(isPlayingState);
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    const [volume, setVolume] = useState(50);
    

  return (
    <div>
        <div>
            <img src="" alt=""/>
        </div>
    </div>
  )
}

export default Player