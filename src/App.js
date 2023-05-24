import "./App.css";
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos, estamos trabajando para mejorar el sitio"/>
    </div>
  );
}

export default App;
