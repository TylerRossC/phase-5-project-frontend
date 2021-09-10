import {useState} from 'react'
import { Button } from 'react-bootstrap'
import Errors from './Errors'
import Badge  from 'react-bootstrap/Badge'
// import PlaylistSongCard from './PlaylistSongCard'
import {useHistory} from 'react-router-dom'
// import PlaylistSongsContainer from './PlaylistSongsContainer'




const PlaylistCard = ({ errors, playlist, handleDeletePlaylist, setSongs, setPlaylist }) => {

    const {id} = playlist
    const history = useHistory()


    const handleClick = () => {
         fetch(`/playlists/${id}`)
            .then(res => res.json())
            .then(data => setSongs(data.playlist))
            setPlaylist(playlist)
            history.push('/playlist')
    }
    
    
    
    return (
        <>
            <Button variant="primary" onClick={handleClick}>
                {playlist.title} <Badge bg="secondary">{playlist.genre}</Badge>
                <span className="visually-hidden"></span>
            </Button>
            <br/>
            <br/>
                <Button id='delete-button' onClick={handleDeletePlaylist} variant="secondary">Delete Playlist</Button> 
            <br/>
            <br/>
            {/* {renderSongCards()} */}
            <Errors errors={errors} />
        </>
    )
}

export default PlaylistCard