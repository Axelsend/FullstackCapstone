// import { useState } from "react";
// import RegistrationForm from "./components/Register";
// import LoginForm from "./components/Login";
// import AccountDetails from "./components/Account";
import Albums from "./components/Albums";
// import "./index.css";
// import SingleAlbum from "./components/SingleAlbum";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navigations";

function App() {
  // const [token, setToken] = useState(null);

  return (                                           
      <Router>
        <div className="App">
          <h1>
            SoundSphere
          </h1>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Albums />} />
            {/* <Route path="/account" component={AccountDetails} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/:bookId" component={SingleAlbum} /> */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
