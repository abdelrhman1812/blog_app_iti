import CreatePost from "@/components/posts/CreatePost";
import NoPosts from "@/components/posts/NoPosts";
import PostList from "@/components/posts/PostList";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import { useGetAllPosts } from "@/hooks/Actions/posts/usePostsCurds";

const Home = () => {
  const { data, isPending } = useGetAllPosts();
  const posts = data?.posts || [];

  return (
    <>
      {/* Main Content */}
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
    </>
  );
};

export default Home;
