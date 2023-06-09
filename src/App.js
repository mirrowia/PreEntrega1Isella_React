import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {Cart} from "./pages/cart"
import ItemListContainer from './ItemListContainer';

function App() {



  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting="Estamos trabajando para mejorar el sitio"/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
