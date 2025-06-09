const mock_posts = [
  {
    id: 1,
    author: "John Doe",
    avatar: "/placeholder-user.jpg",
    time: "2 hours ago",
    title: "My First Blog Post",
    content:
      "Just started my journey into web development! Here's what I learned about React components today. It's amazing how you can break down complex UIs into smaller, reusable pieces. Can't wait to share more insights as I continue learning! 🚀",
    image: "/placeholder.svg?height=300&width=500",
    likes: 24,
    shares: 2,
    comments: [
      {
        id: 1,
        author: "Sarah Wilson",
        avatar: "/placeholder-user.jpg",
        content:
          "Great post! React components are indeed powerful. Keep sharing your learning journey!",
        time: "1 hour ago",
      },
      {
        id: 2,
        author: "Mike Chen",
        avatar: "/placeholder-user.jpg",
        content:
          "Welcome to the React world! You'll love how modular everything becomes.",
        time: "30 minutes ago",
      },
    ],
  },
  {
    id: 2,
    author: "Sarah Wilson",
    avatar: "/placeholder-user.jpg",
    time: "5 hours ago",
    title: "10 Tips for Better CSS",
    content:
      "After years of writing CSS, here are my top 10 tips that will make your stylesheets cleaner and more maintainable. From using CSS custom properties to mastering flexbox and grid layouts. What's your favorite CSS tip? Drop it in the comments! 💡",
    image: "/placeholder.svg?height=250&width=500",
    likes: 156,
    shares: 12,
    comments: [
      {
        id: 3,
        author: "Alex Johnson",
        avatar: "/placeholder-user.jpg",
        content: "CSS Grid changed my life! Thanks for the tips.",
        time: "3 hours ago",
      },
    ],
  },
  {
    id: 3,
    author: "Mike Chen",
    avatar: "/placeholder-user.jpg",
    time: "1 day ago",
    title: "Building My First Full-Stack App",
    content:
      "Just deployed my first full-stack application! 🎉 Used React for the frontend, Node.js for the backend, and MongoDB for the database. The learning curve was steep but totally worth it. Here's what I learned along the way and some challenges I faced...",
    image: "/placeholder.svg?height=280&width=500",
    likes: 89,
    shares: 7,
    comments: [],
  },
];

export default mock_posts;
