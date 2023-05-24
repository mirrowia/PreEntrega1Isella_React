import "./ItemListContainer.css";

function ItemListContainer(props) {
  return <>
  <div id="ItemListContainer" className="container-fluid bg-warning-subtle">
    <h1 id="saludo" className="position-absolute top-50 start-50 translate-middle">{props.greeting}</h1>
    
  </div>
  </>;
}

export default ItemListContainer;
