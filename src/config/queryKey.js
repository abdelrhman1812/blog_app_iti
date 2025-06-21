const queryKeys = {
  /* Posts */

  posts: "getPosts",
  postsDelete: "posts-delete",
  postsAdd: "posts-add",
  postsPatch: "posts-patch",
  postLike: "post-like",

  /* Comments */

  deleteComments: "comments",

  /* Auth */
  register: "signup",
  login: "signin",
  user: "user",
  forgotPassword: "/auth/forgot-password",
  resetPassword: "/auth/reset-password",

  /* User */
  userProfileById: "userProfileById",
  userProfile: "userProfile",
  updateUserImage: "updateUserImage",
  suggestedUser: "suggestedUser",
  updateUserProfile: "updateUserProfile",
  getUserFollower: "usersFollowers",

  /* admin */
  getAllUser: "getAllUser",
};

export default queryKeys;
