import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/film-max">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/product" element={<Product />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;