import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./pages/itemlistcontainer";
import ItemDetailContainer from "./pages/itemdetailcontainer";
import { Cart } from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/search/:string" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
