import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Faq from "./components/Faq";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import NewBooks from "./components/NewBooks";
import PremiumCollection from "./components/PremiumCollection";
import StandardCollection from "./components/StandardCollection";
import ClassicCollection from "./components/ClassicCollection";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Link to="/" />
          <Link to="/login" />
          <Link to="/navbar" />
          <Link to="/faq" />
          <Link to="/contactUs" />
          <Link to="/newBooks" />
          <Link to="/premiumCollection" />
          <Link to="/classicCollection" />
          <Link to="/standardCollection" />

          <Routes>
            <Route exact path="/" exact element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/newBooks" element={<NewBooks />} />
            <Route path="/premiumCollection" element={<PremiumCollection />} />
            <Route path="/classicCollection" element={<ClassicCollection />} />
            <Route
              path="/standardCollection"
              element={<StandardCollection />}
            />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
