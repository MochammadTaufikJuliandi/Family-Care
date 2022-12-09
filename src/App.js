import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Articles from "./pages/Articles";
import Konsultasi from "./pages/Konsultasi";
import DetailPage from "./pages/DetailPage";



function App() {

    return (
        <BrowserRouter>
        <div className="App">
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/article" element={<Articles/>}/>
            <Route path="/konsultasi" element={<Konsultasi/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
