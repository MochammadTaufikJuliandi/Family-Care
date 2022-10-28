import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavBottom from "./components/NavBottom";

import CategoryList from "./components/CategoryList";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <CategoryList />
        <h1 className="text-3xl font-bold underline">Hellowwww</h1>
        <Footer />
      </div>
      <NavBottom />
    </>
  );
}

export default App;
