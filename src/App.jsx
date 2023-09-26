import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import SignupAdmin from "./Components/SignupAdmin/SignupAdmin";
function App() {

  return (
    <>
      <BrowserRouter>
       <SignupAdmin/> 
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Components/SignupAdmin/SignupAdmin" element={<SignupAdmin/>} />
            
          </Routes>
         
        </div>
      </BrowserRouter>
    </>
  )
}

export default App