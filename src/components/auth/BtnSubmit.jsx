import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const BtnSubmit = ({ formik, isPending, text }) => {
  return (
    <Button
      disabled={!(formik.isValid && formik.dirty) || isPending}
      type="submit"
      className="w-full bg-primary  hover:bg-primary/90 cursor-pointer"
    >
      {isPending ? (
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        text
      )}
    </Button>
  );
};

export default BtnSubmit;
