import Errors from './Errors'
import Playlists from './Playlists'


const Home = ({currentUser, errors, playlists, setPlaylists, setSongs, setPlaylist}) => {
    
    
    const renderPlaylists = () => {
        return playlists.map(playlist => {
            return <Playlists key={playlist.id} errors={errors} playlists={playlists} playlist={playlist} currentUser={currentUser} setPlaylists={setPlaylists} setSongs={setSongs} setPlaylist={setPlaylist} />
        })
    }
    
    console.log(playlists)
    
    return(
        <div>
            <h1> WELCOME HOME!</h1>
            <Errors errors={errors} />
            {renderPlaylists()}
            <br/>
        </div>

    )
}

export default Home;
