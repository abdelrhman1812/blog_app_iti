import CreatePost from "@/components/posts/CreatePost";
import NoPosts from "@/components/posts/NoPosts";
import PostList from "@/components/posts/PostList";
import LeftSidebar from "@/components/sideBars/left-sidebar";
import RightSidebar from "@/components/sideBars/right-sidebar";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import { useGetAllPosts } from "@/hooks/Actions/posts/usePostsCurds";

const Home = () => {
  const { data, isPending } = useGetAllPosts();
  const posts = data?.posts || [];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1320px]  px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className="hidden lg:block md:w-1/4 lg:w-1/5 pr-4 sticky top-16 h-[calc(100vh-4rem)]">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="w-full  lg:w-3/5 py-6">
            {/* Create Post Form */}
            <CreatePost />

            {/* Posts Feed */}
            {isPending ? (
              <PostSkeleton length={3} />
            ) : posts.length > 0 ? (
              <PostList posts={posts} />
            ) : (
              <NoPosts />
            )}
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block md:w-1/4 lg:w-1/5 pl-4 sticky top-16 h-[calc(100vh-4rem)]">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
