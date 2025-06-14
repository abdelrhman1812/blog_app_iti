import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const LinkProfile = ({ user }) => {
  return (
    <Link to={`/profile/${user?._id}`}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={user?.image?.secure_url} alt={user?.userName} />
        <AvatarFallback>{user?.userName?.charAt(0) || "U"}</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default LinkProfile;
