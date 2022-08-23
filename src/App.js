import "./App.css";
import React from "react";

import Lista from "./components/Lista";
import NovoItem from "./components/NovoItem";

const App = () => {
  const [lista, setLista] = React.useState([
    {
      id: 1,
      text: "titulo 1",
      checked: false,
    },
    {
      id: 2,
      text: "titulo 2",
      checked: false,
    },
    {
      id: 3,
      text: "titulo 3",
      checked: true,
    },
  ]);

  const handleCheckItem = (id) => {
    const lista_atualizada = lista.map((item) =>
      item.id !== id ? item : { ...item, checked: !item?.checked }
    );
    setLista(lista_atualizada);
  };

  const handleDeleteItem = (id) => {
    const lista_atualizada = lista.filter((item) => item.id !== id);
    setLista(lista_atualizada);
  };

  const handleNewItem = (item) => {
    const lista_atualizada = [...lista, item];
    setLista(lista_atualizada);
  };

  return (
    <div className="app">
      <NovoItem handleNewItem={handleNewItem} />
      <hr />
      <Lista
        lista={lista}
        handleCheckItem={handleCheckItem}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

export default App;
