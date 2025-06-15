import { useGetUserFollower } from "@/hooks/Actions/users/useUsersCurds";

const Follower = () => {
  const { data, isPending } = useGetUserFollower();

  return (
    <>
      {/*    <div className="mx-auto max-w-[1320px]  my-5 px-4">
        {isPending ? (
          <UserFollowerSkeleton count={3} />
        ) : user ? (
          <UserFollower data={data} isPending={isPending} />
        ) : (
          <div className="py-4 text-center">
            Please log in to view your followers
          </div>
        )}
      </div>*/}
    </>
  );
};

export default Follower;
