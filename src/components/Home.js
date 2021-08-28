import Errors from './Errors'


const Home = ({currentUser, errors}) => {
    
    
    // const render = () => {
    //     return playlists.map(playlist => {
    //         return <Playlist key={playlist.id}  errors={errors} currentUser={currentUser} />
    //     })
    // }
    
    
    return(
        <div>
            <h1> WELCOME HOME!</h1>
            <Errors errors={errors} />
            
            <br/>
        </div>

    )
}

export default Home;
