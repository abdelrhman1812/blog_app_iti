import { Button } from "../ui/button";

const BtnCancel = ({ handleCancel, text }) => {
  return (
    <Button
      variant="outline"
      className={"hover:bg-error/80"}
      type="button"
      onClick={handleCancel}
    >
      {text}
    </Button>
  );
};

export default BtnCancel;
