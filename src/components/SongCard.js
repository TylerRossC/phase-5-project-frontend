import React, {useState} from 'react'
import {Dropdown} from 'react-bootstrap'
import DropDown from './Dropdown'



const SongCard = ({song, playlists}) => {


    
    const renderDropdown = () => {
        return playlists.map( (playlist, idx) => {
            return <DropDown key={idx} song={song} playlist={playlist}></DropDown>
        })
    }

    

    return (
        <div>
            <div class="card">
                <div class="card-body">
                <img src={song.album.cover_small}/>
                <br/>
                    {song.title_short} - {song.artist.name}
                    <br/>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Add to playlist:
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {renderDropdown()}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default SongCard
