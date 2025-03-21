import { useState } from "react";
import RegistrationForm from "./components/Register";
import LoginForm from "./components/Login";
import Albums from "./components/Albums";
// import "./index.css";
import SingleAlbum from "./components/SingleAlbum";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigations";
import UpdateUser from "./components/Update";
import DeleteUser from "./components/Delete";

function App() {
  const [token, setToken] = useState(null);

  return (                                           
      <Router>
        <div className="App">
          <h1>
            SoundSphere
          </h1>
          <Navbar />
          <Routes>
            <Route path="/" element={<Albums />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/:albumId" element={<SingleAlbum />} />
            <Route path="/update" element={<UpdateUser />} />
            <Route path="/Delete" element={<DeleteUser />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
