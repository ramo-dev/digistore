import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ComingSoon from "./ComingSoon/ComingSoon";
import Home from "./routes/Home";
import SellerRegister from "./components/Register/SellerRegister";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { ScaleLoader } from "react-spinners";
import { useEffect, useState } from "react";
import {account} from './utils/firebase'

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <div className="loader-container">
      <ScaleLoader color="#008080" />
    </div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coming" element={<ComingSoon />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/register/as/seller" element={<SellerRegister />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
