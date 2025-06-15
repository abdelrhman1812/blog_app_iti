import { Button } from "../ui/button";

const BtnCancel = ({ handleCancel, text }) => {
  return (
    <Button variant="destructive" type="button" onClick={handleCancel}>
      {text}
    </Button>
  );
};

export default BtnCancel;
