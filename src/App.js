import "./App.css";
import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";
import ItemCount from "./Item/ItemCount";

function App() {

  const onAdd = () => {
    if (order < stock) {
      setOrder(order++);
    }

  return (
    <div className="App">
      <NavBar />
      <ItemCount stock="5" initial="0" />
      <ItemListContainer greeting="Bienvenidos, estamos trabajando para mejorar el sitio" />
    </div>
  );
}

export default App;
