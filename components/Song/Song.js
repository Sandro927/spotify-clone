import React from 'react';
import useSpotify from '../../hooks/useSpotify';

function Song({order, track}) {
    const spotifyAPI = useSpotify();
    return (
    <div>
        <div>
            <p>{order + 1}</p>
            <img 
                src={track.track.album.images[0].url}
                alt="Song Avatar"
                className="h-10 w-10"
            />
        </div>
    </div>
    )
}

export default Song