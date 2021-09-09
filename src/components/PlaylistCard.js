import {useState} from 'react'
import { Button } from 'react-bootstrap'
import Errors from './Errors'
import Badge  from 'react-bootstrap/Badge'
import PlaylistSongCard from './PlaylistSongCard'
// import {useHistory} from 'react-router-dom'




const PlaylistCard = ({ errors, playlist, handleDeletePlaylist }) => {

    const {id} = playlist
    const [songs, setSongs] = useState([])

    const handleClick = () => {
         fetch(`/playlists/${id}`)
            .then(res => res.json())
            .then(data => setSongs(data.playlist))
    }
    
    const renderSongCards = () => {
        return songs.map( (song, idx) => {
            return <PlaylistSongCard key={idx} song={song} songs={songs} setSongs={setSongs} playlist={playlist}></PlaylistSongCard>
        })
    }
    
    return (
        <>
            <Button variant="primary" onClick={handleClick}>
                {playlist.title} <Badge bg="secondary">{playlist.genre}</Badge>
                <span className="visually-hidden">unread messages</span>
                <Button id='delete-button' onClick={handleDeletePlaylist} variant="primary">Delete Playlist</Button> 
            </Button>
            <br/>
            <br/>
            {renderSongCards()}
            <Errors errors={errors} />
        </>
    )
}

export default PlaylistCard