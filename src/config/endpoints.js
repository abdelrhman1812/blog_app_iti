const endPoints = {
  /* Posts */
  posts: "/posts",
  addPosts: "/posts",
  deletePosts: "/posts",
  patchPosts: "/posts",
  /* comments */
  comments: "/posts",
  addComment: "/comments",
  updateComment: "/comments",

  /* Auth */
  users: "/users",
  register: "/auth/signup",
  login: "/auth/signin",
  userProfile: "/users",
  userProfileById: "/users",

  /* Admin */
  getAllUser: "/admin/users",
};

export default endPoints;
