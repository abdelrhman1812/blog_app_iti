import { Edit } from "lucide-react";
import { Button } from "../ui/button";

const BtnUpdate = ({ handleEditClick, text }) => {
  return (
    <Button
      variant="default"
      className="hover:bg-primary/80"
      size="sm"
      onClick={handleEditClick}
    >
      <Edit className="w-4 h-4 mr-2" />
      {text}
    </Button>
  );
};

export default BtnUpdate;
