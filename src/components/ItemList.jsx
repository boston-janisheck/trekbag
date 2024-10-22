const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
};

const Item = ({ item }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} /> {item.name}
      </label>

      <button>❌</button>
    </li>
  );
};

export default ItemList;
