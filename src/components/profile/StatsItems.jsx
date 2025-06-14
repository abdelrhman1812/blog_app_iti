const StatsItems = ({ data }) => {
  const statsItems = [
    {
      title: "Posts",
      value: data?.posts?.length || 0,
    },
    {
      title: "Followers",
      value: data?.user?.followers?.length || 0,
    },
    {
      title: "Following",
      value: data?.user?.following.length || 0,
    },
  ];
  return (
    <div className="flex items-center justify-between md:justify-start gap-6 md:gap-8 px-4 py-3 border-b dark:border-gray-700">
      {statsItems.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center min-w-[60px]"
        >
          <span className="font-bold text-lg text-gray-900 ">{item.value}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatsItems;
