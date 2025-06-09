import LeftSidebar from "@/components/left-sidebar";
import CreatePost from "@/components/posts/CreatePost";
import PostList from "@/components/posts/PostList";
import RightSidebar from "@/components/right-sidebar";
import endPoints from "@/config/endpoints";
import queryKeys from "@/config/queryKey";
import useGetData from "@/hooks/curdsHook/useGetData";

const Home = () => {
  const { data } = useGetData(endPoints.posts, queryKeys.posts);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5 pr-4 sticky top-16 h-[calc(100vh-4rem)]">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/4 lg:w-3/5 py-6">
            {/* Create Post Form */}

            <CreatePost />
            {/* Posts Feed */}
            <PostList posts={data?.posts} />
          </div>

          {/* Right Sidebar - Hidden on mobile */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5 pl-4 sticky top-16 h-[calc(100vh-4rem)]">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
