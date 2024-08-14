import Button from "./Button";

const ButtonGroup = () => {
  return (
    <section className="button-group">
      <Button type="secondary">Mark All as Complete</Button>
      <Button type="secondary">Mark All as Incomplete</Button>
      <Button type="secondary">Reset to Initial</Button>
      <Button type="secondary">Remove All Items</Button>
    </section>
  );
};

export default ButtonGroup;
