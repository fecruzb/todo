import React from "react";

import ListaItem from "./ListaItem";

const Lista = ({ lista, handleCheckItem, handleDeleteItem }) => (
  <div className="lista">
    {lista.map((item) => (
      <ListaItem
        item={item}
        handleCheckItem={handleCheckItem}
        handleDeleteItem={handleDeleteItem}
      />
    ))}
  </div>
);

export default Lista;
