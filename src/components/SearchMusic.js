import {useState, useEffect} from 'react'
// import SearchContainer from './SearchContainer'
import SongCard from './SongCard'

function SearchMusic({playlists}) {
    
    const [search, setSearch] = useState([])
    const [state, setState] = useState("")
    
    const onSubmit = (e) => {
        e.preventDefault()

    const configObj = {
        method: 'GET',
        headers: {
		    "x-rapidapi-key": "e6ce249b59msh08e9e2f12f225e3p1d346ejsn14289c82358e"
        },
        // body: JSON.stringify(state)
    }

     fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${state}`, configObj)
        .then(res => res.json())
        .then(data => setSearch(data.data))
}
console.log(search)
    const renderSongs = () => {
        return search.map( (song, idx) => {
            return <SongCard key={idx} song={song} playlists={playlists}/>
        })
    }

   
    return (
        <div>
            Search for a song!
            <form onSubmit={onSubmit} >
                <label for="search">Search:</label><br/>
                    <input onChange={(e) => setState(e.target.value)} type="text" id="search" name="search" /><br/><br/>
                    <input type="submit" value="Submit"/>
            </form>
            <br/>
            {renderSongs()}
            <br/>
        </div>
    )
}

export default SearchMusic
