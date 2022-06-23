import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import About from "./pages/About";
import Register from "./pages/Register";
import Header from "./components/Header";
import Login from "./Login";
import Company from "./pages/Company";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddEdit />} />
        <Route exact path="/update/:id" element={<AddEdit />} />
        <Route exact path="/view/:id" element={<View />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/company" element={<Company />} />
      </Routes>
    </Router>
  );
}

export default App;
