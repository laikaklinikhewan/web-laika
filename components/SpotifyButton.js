import React from 'react'
import Link from 'next/link'

const SpotifyButton = ({spotifyUrl}) => {
    return (
        <Link href={spotifyUrl} passHref={true}>
            <button className="sm:w-56 w-32 sm:h-12 h-8 sm:text-base text-spotify text-white bg-spotify border-2 border-spotify rounded-full">
            <img className="sm:w-8 w-5 sm:h-8 h-5 sm:ml-2 ml-1 mt-spotify absolute" src="/icons/spotify.svg" alt="" width="5" height="5"/>
                <a className="sm:ml-8 ml-5 font-bold align-middle">Listen on Spotify</a>
            </button>
        </Link>
    )
}

export default SpotifyButton
