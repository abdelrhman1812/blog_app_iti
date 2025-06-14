import { Button } from "../ui/button";

const FooterForm = ({ title, actionBtn, linkTitle }) => {
  return (
    <div className=" flex justify-center   items-center  mt-4  gap-3">
      <p className="text-gray-600">{title}</p>
      <Button onClick={actionBtn} variant="link" className="p-0 text-primary">
        {linkTitle}
      </Button>
    </div>
  );
};

export default FooterForm;
