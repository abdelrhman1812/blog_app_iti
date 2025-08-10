import NoPosts from "@/components/posts/NoPosts";
import PostList from "@/components/posts/PostList";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import { useGetAllPosts } from "@/hooks/Actions/posts/usePostsCurds";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const { data, isPending } = useGetAllPosts();
  const posts = data?.posts || [];

  // Filter posts by title or content
  const filteredPosts = query
    ? posts.filter(
        (post) =>
          post.title?.toLowerCase().includes(query) ||
          post.content?.toLowerCase().includes(query)
      )
    : posts;

  return (
    <div className="container mx-auto py-6">
      {isPending ? (
        <PostSkeleton length={3} />
      ) : filteredPosts.length > 0 ? (
        <PostList posts={filteredPosts} />
      ) : (
        <NoPosts />
      )}
    </div>
  );
};

export default SearchPage;
