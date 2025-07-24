const blogPosts = [
  {
    title: "Welcome to My Blog",
    date: "July 24, 2025",
    content: "Hi! I'm Darwin Harish Joan, a passionate engineer and developer. This blog is where I share my thoughts on technology, software, and career growth."
  },
  {
    title: "Top 5 Skills for Aspiring Developers",
    date: "July 23, 2025",
    content: "1. Problem Solving\n2. Clean Coding\n3. Version Control (Git)\n4. Communication\n5. Continuous Learning\nStay tuned for more tech tips!"
  }
];

const container = document.getElementById("blog-posts");

blogPosts.forEach(post => {
  const div = document.createElement("div");
  div.classList.add("post");
  div.innerHTML = `
    <h2>${post.title}</h2>
    <small>${post.date}</small>
    <p>${post.content.replace(/\n/g, '<br>')}</p>
  `;
  container.appendChild(div);
});
