import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Homepage from "./containers/Homepage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
