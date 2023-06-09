import ItemCount from "./Item/ItemCount";
import "./ItemListContainer.css";
import Template from "./Template";

function ItemListContainer(props) {
  return (
    <Template>
      <div id="ItemListContainer" className="container-fluid bg-warning-subtle">
        <h1
          id="saludo"
          className="position-absolute top-50 start-50 translate-middle"
        >
          {props.greeting}
        </h1>
        <ItemCount stock="5" initial="0" />
      </div>
    </Template>
  );
}

export default ItemListContainer;
