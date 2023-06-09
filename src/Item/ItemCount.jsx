import { useEffect } from "react";
import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [order, setOrder] = useState(0);

  useEffect(() => {
    document.getElementById("itemQty").value = order;
  }, [order]);

  return (
    <div className="item-count-container">
      <div className="item-input-div">
        <i
          className="bi bi-dash"
          onClick={() => {
            if (order > 0) {
              setOrder(order - 1);
            }
          }}
        />
        <input id="itemQty" type="text" defaultValue={initial} />
        <i
          className="bi bi-plus"
          onClick={() => {
            if (order < stock) {
              setOrder(order + 1);
            }
          }}
        />
      </div>
      <button className="btn">
        <i className="bi bi-cart-plus-fill" />
      </button>
    </div>
  );
}

export default ItemCount;
