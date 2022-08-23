import React from "react";

const ListaItem = ({ item, handleCheckItem, handleDeleteItem }) => (
  <div className="lista-item">
    <input
      type="checkbox"
      checked={item.checked}
      onChange={() => handleCheckItem(item.id)}
    />
    {item.text}

    <button onClick={() => handleDeleteItem(item.id)}>del</button>
  </div>
);

export default ListaItem;
