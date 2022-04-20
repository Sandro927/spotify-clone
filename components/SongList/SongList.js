import React from 'react';
import { useRecoilValue } from 'recoil';
import { playlistState } from '../../atoms/playlistAtoms';
import { useEffect} from 'react';

function Songs() {
  const playlist = useRecoilValue(playlistState);



  
  
  return (
    <div className="text-white">
      {
        playlist?.tracks.items.map((track, index) => {
          return (
            <div key={index}>
              {track.track.name}
            </div>
          )
        })
      }
    
    </div>
  )
}

export default Songs