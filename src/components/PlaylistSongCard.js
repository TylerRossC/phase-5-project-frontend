import React from 'react'
import { Button } from 'react-bootstrap'


const PlaylistSongCard = ({song, songs, setSongs}) => {
    
    const {id} = song
    
    const handleRemoveSong = () => {
        let config = {
            method: 'DELETE'
        }
        fetch(`/songs/${id}`, config)
        .then(res => {
            if(res.ok) {
         setSongs(songs.filter(song => song.id !== id))
        }
    })
}
    console.log(songs)
    
    return (
        <div>
            <div class="card">
                <div class="card-body">
                <img src={song.cover_small}/>
                <br/>
                    {song.title} - {song.artist}
                    <br/>
                    <br/>
                    <Button id='delete-button' onClick={handleRemoveSong} variant="primary">Remove from playlist</Button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistSongCard
