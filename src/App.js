import stocks from "./data";

// Import route and components
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import ShowStock from "./components/ShowStock";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks stocks={stocks} />} />
        <Route path="/stocks/:symbol" element={<ShowStock />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
