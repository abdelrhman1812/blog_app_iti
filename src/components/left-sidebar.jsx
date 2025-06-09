import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import {
  Bell,
  Bookmark,
  Calendar,
  FileText,
  HelpCircle,
  Home,
  MessageSquare,
  Settings,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

export default function LeftSidebar() {
  const { user } = useAuth();
  const menuItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: User, label: "Profile", id: "profile" },
    { icon: Users, label: "Friends", id: "friends" },
    { icon: Bookmark, label: "Saved Posts", id: "saved" },
    { icon: Calendar, label: "Events", id: "events" },
    { icon: MessageSquare, label: "Messages", id: "messages" },
    { icon: Bell, label: "Notifications", id: "notifications" },
  ];

  const groupItems = [
    {
      name: "React Developers",
      members: 12.5,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "JavaScript Enthusiasts",
      members: 8.3,
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "UI/UX Design",
      members: 5.7,
      image: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto pb-20">
      {/* User Profile Summary */}
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={user?.user?.image?.secure_url}
              alt={user?.user?.userName}
            />
            <AvatarFallback>
              {user?.user?.userName?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{user?.user?.userName}</p>
            <p className="text-xs text-gray-500">View your profile</p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Main Navigation */}
      <div className="p-2">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={"ghost"}
              className="w-full justify-start"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      <Separator className="my-2" />

      {/* Your Groups */}
      <div className="p-4">
        <h3 className="font-medium text-sm mb-3">Your Groups</h3>
        <div className="space-y-3">
          {groupItems.map((group, index) => (
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
                <p className="text-xs text-gray-500">
                  {group.members}k members
                </p>
              </div>
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-blue-600"
          >
            <Users className="mr-2 h-4 w-4" />
            See All Groups
          </Button>
        </div>
      </div>

      <Separator className="my-2" />

      {/* Shortcuts */}
      <div className="p-4">
        <h3 className="font-medium text-sm mb-3">Shortcuts</h3>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="justify-start">
            <FileText className="mr-2 h-4 w-4" />
            My Posts
          </Button>
          <Button variant="outline" size="sm" className="justify-start">
            <TrendingUp className="mr-2 h-4 w-4" />
            Trending
          </Button>
          <Button variant="outline" size="sm" className="justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="outline" size="sm" className="justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            Help
          </Button>
        </div>
      </div>

      <div className="p-4 text-xs text-gray-500">
        <p>© 2024 BlogApp</p>
        <p className="mt-1">Privacy · Terms · Advertising · Cookies</p>
      </div>
    </div>
  );
}
