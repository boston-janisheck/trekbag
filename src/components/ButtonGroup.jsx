import Button from "./Button";

const secondaryButtons = [
  "Mark All as Complete",
  "Mark All as Incomplete",
  "Reset to Initial",
  "Remove All Items",
];

const ButtonGroup = () => {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
};

export default ButtonGroup;
