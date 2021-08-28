import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Logout from './components/Logout'
import CreatePlaylist from './components/CreatePlaylist'
import EditPlaylist from './components/EditPlaylist'
import {useState, useEffect} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

const App = () => {
  
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null)
  const [errors, setErrors] = useState([])
  const [playlist, setPlaylist] = useState([])

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setUserAndPlaylists(data)
    if(!data.errors){
      history.push('/home')
      setErrors([])
    }
  }

  const handleCreatePlaylist = (data) => {
    data.errors ? setErrors(data.errors) : setPlaylist([...playlist, data.playlist])
    if(!data.errors){
      history.push('/home')
      setErrors([])
    }
  }
  
  const setUserAndPlaylists = (data) => {
    setCurrentUser(data.user)
    setPlaylist(data.playlist)
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
      { currentUser ? `Hello ${currentUser.username}!` : null}
      </h1>
      <Switch>
        <Route exact path='/home'>
          <Home errors={errors} currentUser={currentUser} />
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
          <CreatePlaylist handleCreatePlaylist={handleCreatePlaylist} setCurrentUser={setCurrentUser} errors={errors} />
        </Route>
        <Route path='/editplaylist'>
          <EditPlaylist setCurrentUser={setCurrentUser} handleUserLoginAndSignup={handleUserLoginAndSignup} errors={errors} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
