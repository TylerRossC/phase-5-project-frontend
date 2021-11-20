import React from 'react'
import {Dropdown} from 'react-bootstrap'


const DropDown = ({playlist, song}) => {
    
    const {id} = playlist

    const handleClick = () => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({title: song.title_short, artist: song.artist.name, cover_small: song.album.cover_small, playlist_id: id})
        }

        fetch('/songs', config)   
        .then(res => res.json())
        .then(data => console.log(data))
        }
    
    
        return (
            <>
                <Dropdown.Item onClick={handleClick} >{playlist.title}</Dropdown.Item>
            </>
    )
}

export default DropDown
