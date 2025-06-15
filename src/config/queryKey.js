const queryKeys = {
  /* Posts */

  posts: "getPosts",
  postsDelete: "posts-delete",
  postsAdd: "posts-add",
  postsPatch: "posts-patch",
  postLike: "post-like",

  /* Auth */
  register: "signup",
  login: "signin",
  user: "user",

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
