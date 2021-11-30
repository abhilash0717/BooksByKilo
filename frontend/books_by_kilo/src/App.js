import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Link to="/home" />
          <Link to="/login" />
          <Routes>
            <Route path="/home" exact element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
