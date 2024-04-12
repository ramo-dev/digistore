import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ComingSoon from './ComingSoon/ComingSoon'
import Home from './routes/Home'
import SellerRegister from './components/Register/SellerRegister'
import Login from './routes/Login'
import Register from './routes/Register'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/coming" Component={ComingSoon} />
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/register=as=seller" Component={SellerRegister} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
