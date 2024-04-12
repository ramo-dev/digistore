import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ComingSoon from './ComingSoon/ComingSoon'
import Home from './routes/Home'
import Register from './routes/Register'
import Login from './routes/Login'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={ComingSoon}/>
        <Route path='/home' Component={Home}/>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
