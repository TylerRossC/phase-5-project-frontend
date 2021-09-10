import React from 'react'
import PlaylistSongCard from './PlaylistSongCard'



const PlaylistSongsContainer = ({songs, setSongs, playlist}) => {
    
    
    
    const renderSongCards = () => {
        return songs.map( (song, idx) => {
            return <PlaylistSongCard key={idx} song={song} songs={songs} setSongs={setSongs} playlist={playlist}></PlaylistSongCard>
        })
    }
    
    return (
        <div className="playlist-songs-container">
                Hello!
            {renderSongCards()}
        </div>
    )
}

export default PlaylistSongsContainer
