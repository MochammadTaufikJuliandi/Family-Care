import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Articles from "./pages/Articles";
import DetailPage from "./pages/DetailPage";
import Konsultasi from "./pages/Konsultasi";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {

    return (
        <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/article" element={<Articles/>}/>
            <Route path="/detail" element={<DetailPage/>}/>
            <Route path="/konsultasi" element={<Konsultasi/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
