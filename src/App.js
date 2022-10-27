import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavBottom from './components/NavBottom'

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hellowwww</h1>
      <Footer />
    </div>
    <NavBottom/>
    </>
  );
}

export default App;
