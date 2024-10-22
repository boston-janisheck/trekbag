import { useState } from "react";
import Button from "./Button";

const AddItemForm = ({ setItems }) => {
  const [itemText, setItemText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const newItem = {
          id: 4,
          name: itemText,
          packed: false,
        };
        setItems((prev) => [...prev, newItem]);
      }}
    >
      <h2>Add an item</h2>
      <input
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Add to List</Button>
    </form>
  );
};

export default AddItemForm;
