import React from 'react'
import { Card, Button} from 'react-bootstrap'
import Errors from './Errors'
// import { Badge } from 'react-bootstrap/Badge'



const PlaylistCard = ({ errors, playlist, handleDeletePlaylist }) => {
   
    
    return (
        <>
            <Card.Title>
                <h6>Title:</h6>
                {playlist.title}
            </Card.Title>
            {/* <Card.Text>
                <p>Time:</p>
                {playlist.time}
            </Card.Text> */}
            {/* <Button variant="primary">
                Playlist <Badge bg="secondary">Genre</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>*/}
            <Button id='delete-button' onClick={handleDeletePlaylist} variant="primary">Delete Playlist</Button> 
            <Errors errors={errors} />
        </>
    )
}

export default PlaylistCard