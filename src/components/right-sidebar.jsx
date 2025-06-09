import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Plus, TrendingUp, X } from "lucide-react";

export default function RightSidebar() {
  const friendSuggestions = [
    {
      name: "Rahma Mohamed",
      avatar: "/placeholder.svg?height=40&width=40",
      mutualFriends: 5,
    },
    {
      name: "Ali Ahmed",
      avatar: "/placeholder.svg?height=40&width=40",
      mutualFriends: 3,
    },
    {
      name: "Mohamed Ali",
      avatar: "/placeholder.svg?height=40&width=40",
      mutualFriends: 8,
    },
  ];

  const trendingTopics = [
    { tag: "ReactJS", posts: 1.2 },
    { tag: "WebDevelopment", posts: 3.5 },
    { tag: "UIDesign", posts: 2.8 },
    { tag: "JavaScript", posts: 5.1 },
    { tag: "NodeJS", posts: 1.7 },
  ];

  const upcomingEvents = [
    {
      title: "React Conference 2024",
      date: "June 15, 2024",
      attendees: 120,
    },
    {
      title: "Web Dev Meetup",
      date: "June 22, 2024",
      attendees: 45,
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto space-y-6 pb-20">
      {/* Friend Suggestions */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium text-sm mb-3">People You May Know</h3>
          <div className="space-y-4">
            {friendSuggestions.map((friend, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage
                      src={friend.avatar || "/placeholder.svg"}
                      alt={friend.name}
                    />
                    <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{friend.name}</p>
                    <p className="text-xs text-gray-500">
                      {friend.mutualFriends} mutual friends
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-center text-blue-600"
            >
              See All Suggestions
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-sm">Trending Topics</h3>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </div>
          <div className="space-y-2">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800"
                >
                  #{topic.tag}
                </Badge>
                <span className="text-xs text-gray-500">
                  {topic.posts}k posts
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-sm">Upcoming Events</h3>
            <Calendar className="h-4 w-4 text-gray-500" />
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-md p-3"
              >
                <h4 className="font-medium text-sm">{event.title}</h4>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-gray-500">{event.date}</p>
                  <Badge variant="outline" className="text-xs">
                    {event.attendees} attending
                  </Badge>
                </div>
              </div>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-center text-blue-600"
            >
              See All Events
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sponsored */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-sm">Sponsored</h3>
          </div>
          <div className="space-y-3">
            <div className="rounded-md overflow-hidden">
              <img
                src="/placeholder.svg?height=150&width=300"
                alt="Advertisement"
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <h4 className="font-medium text-sm">Learn Web Development</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Master modern web technologies with our online courses
                </p>
                <Button
                  size="sm"
                  variant="link"
                  className="p-0 h-auto mt-1 text-blue-600"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
