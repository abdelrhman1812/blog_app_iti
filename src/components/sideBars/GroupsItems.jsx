import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import figmaImg from "../../assets/images/figma-svgrepo-com.svg";
import jsImg from "../../assets/images/javascript-svgrepo-com.svg";
import reactImg from "../../assets/images/reactjs-svgrepo-com.svg";

const groupItems = [
  {
    name: "React Developers",
    members: 12.5,
    image: reactImg,
  },
  {
    name: "JavaScript Enthusiasts",
    members: 8.3,
    image: jsImg,
  },
  {
    name: "UI/UX Design",
    members: 5.7,
    image: figmaImg,
  },
];
const GroupsItems = () => {
  return (
    <div className="px-4">
      <h3 className="font-medium text-sm mb-3">Your Groups</h3>
      <div className="space-y-3">
        {groupItems?.map((group, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-md overflow-hidden">
              <img
                src={group.image || "/placeholder.svg"}
                alt={group.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">{group.name}</p>
              <p className="text-xs text-gray-500">{group.members}k members</p>
            </div>
          </div>
        ))}
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start text-primary hover:bg-primary/80 hover:text-white transition-all duration-300"
        >
          <Users className="mr-2 h-4 w-4" />
          See All Groups
        </Button>
      </div>
    </div>
  );
};

export default GroupsItems;
