import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ComingSoon from './ComingSoon/ComingSoon'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={ComingSoon}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
