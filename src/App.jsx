// import axios from "axios";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Product } from "./Components/Products";
import { Details } from "./Components/Details";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/products" element={<Product />}></Route>
                <Route path="/product/:id" element={<Details />}></Route>
            </Routes>
        </div>
    );
}

export default App;
