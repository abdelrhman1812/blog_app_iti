import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = ({ data }) => {
  return (
    <Avatar>
      <AvatarImage
        src={data?.user?.image?.secure_url}
        alt={data?.user?.userName}
      />
      <AvatarFallback>{data?.user?.userName?.charAt(0) || "U"}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
