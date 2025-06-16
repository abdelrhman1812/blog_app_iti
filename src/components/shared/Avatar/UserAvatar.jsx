import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import imgUser from "../../../assets/images/user-img.svg";
const UserAvatar = ({ data }) => {
  return (
    <Avatar>
      <AvatarImage
        src={data?.user?.image?.secure_url || imgUser}
        alt={data?.user?.userName}
      />
      <AvatarFallback>{data?.user?.userName?.charAt(0) || "U"}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
