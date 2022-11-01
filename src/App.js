import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavBottom from "./components/NavBottom";

import CategoryList from "./components/CategoryList";
import PinCard from "./components/PinCard";
import ListPost from "./components/ListPost";
function App() {
    return (
        <>
            <div className="App">
                <Navbar />
                <main>
                    <PinCard />
                    <CategoryList />
                    <ListPost />
                </main>
                <Footer />
            </div>
            <NavBottom />
        </>
    );
}

export default App;
