import React from "react";

const NovoItem = ({ handleNewItem }) => {
  const [value, setValue] = React.useState("");

  const handleClick = () => {
    handleNewItem({
      id: 1 + Math.floor(Math.random() * 10000),
      text: value,
      checked: false,
    });
    setValue("");
  };

  return (
    <div className="novo-item">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}> add </button>
    </div>
  );
};

export default NovoItem;
