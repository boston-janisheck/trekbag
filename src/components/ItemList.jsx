import { initialItems } from "../lib/constants";

const ItemList = () => {
  return (
    <ul>
      {initialItems.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </ul>
  );
};

export const Item = ({ item }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} /> {item.name}
      </label>
    </li>
  );
};

export default ItemList;
