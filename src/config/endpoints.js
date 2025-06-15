const endPoints = {
  /* Posts */
  posts: "/posts",
  addPosts: "/posts",
  deletePosts: "/posts",
  patchPosts: "/posts",
  likePost: "/posts",

  /* comments */
  comments: "/posts",
  addComment: "/comments",
  updateComment: "/comments",
  deleteComment: "/comments",

  /* Auth */
  register: "/auth/signup",
  login: "/auth/signin",

  /* User */
  users: "/users",
  userProfile: "/users",
  userProfileById: "/users",
  updateUserImage: "/users/update-image",
  follow: "/follow",
  suggestedUser: "/users/unfollow",
  updateUserProfile: "/users/update-profile",
  getUserFollower: "/users/followers",

  /* Admin */
  getAllUser: "/admin/users",
};

export default endPoints;
