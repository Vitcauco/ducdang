import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from './pages/Register'
import Navbar from "./components/navbar"
import Footer from "./components/Footer"
// import Card from "./components/Card"




const App = () => {
  const location = useLocation()

  return (
    
    <>
      {
        location.pathname !== "/login"
        && location.pathname !== "/Register"
        && <Navbar />
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
      {
        location.pathname !== "/login"
        && location.pathname !== "/register"
        && <Footer />
      }
    </>
  )
}

export default App