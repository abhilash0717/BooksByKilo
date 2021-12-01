import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Faq from "./components/Faq";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Link to="/home" />
          <Link to="/login" />
          <Link to="/navbar" />
          <Link to="/faq"/>
          <Link to="/contactUs"/>
          <Routes>
            <Route path="/home" exact element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contactUs" element={<ContactUs />} />

          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
