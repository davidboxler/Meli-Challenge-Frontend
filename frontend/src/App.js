import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ProductListView from "./pages/ProductListView";
import ProductView from "./pages/ProductView";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<ProductView />} />
        <Route path="/items" element={<ProductListView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;