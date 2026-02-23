import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Learn from "./pages/Learn/Learn";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (

    
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;