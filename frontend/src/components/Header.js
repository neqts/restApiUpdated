import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddUser");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <div className="header">
      <h1 className="logo">Manager</h1>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Users
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddUser" ? "active" : ""}`}
            onClick={() => setActiveTab("AddUser")}
          >
            Add User
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            Blog
          </p>
        </Link>
        <Link to="/company">
          <p
            className={`${activeTab === "Company" ? "active" : ""}`}
            onClick={() => setActiveTab("Company")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;