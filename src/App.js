import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Articles from "./pages/Articles";
import Konsultasi from "./pages/Konsultasi";

function App() {

    return (
        <BrowserRouter>
        <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/article" element={<Articles/>}/>
            <Route path="/konsultasi" element={<Konsultasi/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
