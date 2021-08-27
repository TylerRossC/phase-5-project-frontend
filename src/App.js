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
  
  // const history = useHistory()
  // const [currentUser, setCurrentUser] = useState(null)
  // const [errors, setErrors] = useState([])
  // // const [playlist, setPlaylist] = useState([])

  // const handleUserLoginAndSignup = (data) => {
  //   data.errors ? setErrors(data.errors) : setUserAndBlocks(data)
  //   if(!data.errors){
  //     history.push('/home')
  //     setErrors([])
  //   }
  // }
  
  // const setUser = (data) => {
  //   setCurrentUser(data.user)
  // }
  
  // const fetchUser = () => {
  //   fetch('/me')
  //   .then(res => res.json())
  //   .then(data => setUser(data))
  // }

    
  // useEffect(() => {
  //   fetchUser()
  // }, [])
  
  
  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
      <h1>
      { currentUser ? `Hello ${currentUser.username}!` : null}
      </h1>
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup  />  
        </Route>
        <Route path='/login'>
          <Login errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
        </Route>
        <Route path='/logout'>
          <Logout setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path='/createplaylist'>
          <CreatePlaylist />
        </Route>
        <Route path='/editplaylist'>
          <EditPlaylist />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
