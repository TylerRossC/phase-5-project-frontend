import {useState} from 'react'
import Errors from './Errors'


const CreatePlaylist = ({ handleCreatePlaylist, errors, setPlaylists, playlists}) => {

    const [state, setState] = useState({})


    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }

        fetch('/playlists', config)  
        .then(res => res.json())
        .then(data => handleCreatePlaylist(data))
    }


    return (
        <div>
            <form onSubmit={onSubmit} >
                <label for="title">Title:</label><br/>
                    <input onChange={onChange} type="text" id="title" name="title" /><br/><br/>
                <label for="time">Category:</label><br/>
                    <input onChange={onChange} type="text" id="category" name="category" /><br/><br/>
                    <input type="submit" value="Submit"/>
            </form> 
            <br/>
            <Errors errors={errors} />
        </div>
    )
}

export default CreatePlaylist;