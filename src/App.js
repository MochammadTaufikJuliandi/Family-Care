import React from "react";
import Header from './components/Header';
import Feature from "./components/Feature";
import About from "./components/About";
import Contact from "./components/Contact";
import aboutImage1 from './components/images/download.png';
import Video from "./components/Video";
import ArticleList from "./components/ArticleList";
import AddArticles from "./components/AddArticles";

function App() {

    return (
     <div className="App">
        <Header/>
        <Video/>
        <Feature/>
        <ArticleList/>
        <AddArticles/>
        </div>
    );
}

export default App;
