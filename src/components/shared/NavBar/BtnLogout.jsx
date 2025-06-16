import { Button } from "@/components/ui/button";

const BtnLogout = ({ handleLogOut }) => {
  return (
    <Button
      onClick={handleLogOut}
      variant="destructive"
      className="cursor-pointer w-full"
      size="sm"
    >
      Logout
    </Button>
  );
};

export default BtnLogout;
