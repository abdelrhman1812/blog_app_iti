import { Check, Loader2, X } from "lucide-react";
import ErrorMsg from "../auth/ErrorMsg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const EditComment = ({ formik, handleCancel, isPending }) => {
  return (
    <form onSubmit={formik.handleSubmit} className="space-y-2">
      <div>
        <Input
          id="content"
          name="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full  dark:bg-background "
          autoFocus
        />
        <ErrorMsg formik={formik} type={"content"} />
      </div>
      <div className="flex gap-2">
        <Button
          type="submit"
          variant="default"
          size="sm"
          className="h-8 gap-1 cursor-pointer "
          disabled={!(formik.isValid && formik.dirty) || isPending}
        >
          <Check className="w-3 h-3" />
          {isPending ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Posting...</span>
            </div>
          ) : (
            "Save"
          )}
        </Button>
        <Button
          type="button"
          variant="destructive"
          size="sm"
          onClick={handleCancel}
          className="h-8 gap-1 cursor-pointer bg-destructive hover:bg-destructive/70"
        >
          <X className="w-3 h-3" />
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default EditComment;
