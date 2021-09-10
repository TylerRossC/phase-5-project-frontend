// import React, {useState} from 'react'
// import EditPlaylist from './EditPlaylist'
import Errors from './Errors'
import PlaylistCard from './PlaylistCard'
import { Card } from 'react-bootstrap'


const Playlists = ({ errors, playlist, playlists, setPlaylists, setSongs, setPlaylist}) => {
   
    const {id} = playlist
    

    const handleDeletePlaylist = () => {
        let config = {
            method: 'DELETE'
        }
        fetch(`/playlists/${id}`, config)
        .then(resp => {
            if (resp.ok){
                setPlaylists(playlists.filter(playlist => playlist.id !== id))
            }
        })
    }

    const renderPlaylist = () => {
            return <PlaylistCard playlist={playlist} errors={errors} handleDeletePlaylist={handleDeletePlaylist} setSongs={setSongs} setPlaylist={setPlaylist} /> 
    }

   
    return (
        <Card id='block-card' >
            <Card.Header>
                
            </Card.Header>
            <Card.Body>
            {renderPlaylist()}
                <Errors errors={errors} />
            </Card.Body>
        </Card>
    )
}

export default Playlists