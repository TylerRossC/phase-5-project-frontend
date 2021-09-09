import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Logout from './components/Logout'
import CreatePlaylist from './components/CreatePlaylist'
import EditPlaylist from './components/EditPlaylist'
import SearchMusic from './components/SearchMusic'
import PlaylistCard from './components/PlaylistCard'
import {useState, useEffect} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

const App = () => {
  
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null)
  const [errors, setErrors] = useState([])
  const [playlists, setPlaylists] = useState([])

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setUserAndPlaylists(data)
    if(!data.errors){
      history.push('/home')
      setErrors([])
    }
  }

  const handleCreatePlaylist = (data) => {
    data.errors ? setErrors(data.errors) : setPlaylists([...playlists, data.playlist])
    if(!data.errors){
      history.push('/home')
      setErrors([])
    }
  }
  
  const setUserAndPlaylists = (data) => {
    setCurrentUser(data)
    setPlaylists(data.playlists)
  }
  
  const fetchUserAndPlaylists = () => {
    fetch('/me')
    .then(res => res.json())
    .then(data => setUserAndPlaylists(data))
  }

    
  useEffect(() => {
    fetchUserAndPlaylists()
  }, [])
  
  
  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
      <h1>
      { currentUser ? `Hi ${currentUser.username}!` : null}
      </h1>
      <Switch>
        <Route exact path='/home'>
          <Home errors={errors} currentUser={currentUser} playlists={playlists} setPlaylists={setPlaylists} />
        </Route>
        <Route path='/signup'>
          <Signup errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />  
        </Route>
        <Route path='/login'>
          <Login errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
        </Route>
        <Route path='/logout'>
          <Logout setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path='/createplaylist'>
          <CreatePlaylist handleCreatePlaylist={handleCreatePlaylist} setCurrentUser={setCurrentUser} playlists={playlists} setPlaylists={setPlaylists} errors={errors} />
        </Route>
        <Route path='/editplaylist'>
          <EditPlaylist setCurrentUser={setCurrentUser} handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
        </Route>
        <Route path='/searchmusic'>
          <SearchMusic errors={errors} playlists={playlists}/>
        </Route>
        <Route path='/playlist'>
          <PlaylistCard />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
