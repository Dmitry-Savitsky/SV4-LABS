import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Notaries from "../pages/Notaries";
import ServicesAccounting from "../pages/ServicesAccounting";
import "./../styles/Header.css";

const Header = () => {
  return (
    <Router>
      <>
        <div className="header-container">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 className="title">Notaries</h1>
          </Link>
          <ul>
            <li>
              <Link to="/notaries"> Нотариусы </Link>
            </li>
            <li>
              <Link to="/servicesAccounting"> Учет услуг </Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/notaries" element={<Notaries />} />
          <Route path="/servicesAccounting" element={<ServicesAccounting />} />
        </Routes>
      </>
    </Router>
  );
};

export default Header;
