import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ setItems }) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input
    if (!itemText) {
      alert("Please enter an item.");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: 4,
      name: itemText,
      packed: false,
    };
    setItems((prev) => [...prev, newItem]);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
      />
      <Button>Add to List</Button>
    </form>
  );
};

export default AddItemForm;
