/*
 * 
 * Filename: ComplexCode.js
 * 
 * Description: This code demonstrates a complex implementation of a social media platform.
 * 
 */

// Define classes for User, Post, and Comment
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }
}

class Post {
  constructor(user, content, timestamp) {
    this.user = user;
    this.content = content;
    this.timestamp = timestamp;
    this.likes = [];
    this.comments = [];
  }

  likePost(user) {
    this.likes.push(user);
  }

  addComment(user, content) {
    const comment = new Comment(user, content);
    this.comments.push(comment);
  }
}

class Comment {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.likes = [];
  }

  likeComment(user) {
    this.likes.push(user);
  }
}

// Create sample users, posts, and comments
const john = new User("John Doe", 25, "john.doe@example.com");
const jane = new User("Jane Smith", 30, "jane.smith@example.com");
const post1 = new Post(john, "Hello, world!", new Date());
const post2 = new Post(jane, "This is a complex example.", new Date());

john.addFriend(jane); // John and Jane become friends
post1.likePost(jane); // Jane likes John's post
post1.addComment(john, "Thanks for liking my post!");
post2.addComment(john, "Nice work!");

// Output the posts and comments with their likes
console.log(`${post1.user.name} said "${post1.content}"`);
console.log(`- ${post1.likes.length} likes, ${post1.comments.length} comments`);
post1.comments.forEach(comment => {
  console.log(`   ${comment.user.name} said "${comment.content}"`);
  console.log(`   - ${comment.likes.length} likes`);
});

console.log();

console.log(`${post2.user.name} said "${post2.content}"`);
console.log(`- ${post2.likes.length} likes, ${post2.comments.length} comments`);
post2.comments.forEach(comment => {
  console.log(`   ${comment.user.name} said "${comment.content}"`);
  console.log(`   - ${comment.likes.length} likes`);
});

// Output:
// John Doe said "Hello, world!"
// - 1 likes, 1 comments
//    Jane Smith said "Thanks for liking my post!"
//    - 0 likes
// 
// Jane Smith said "This is a complex example."
// - 0 likes, 1 comments
//    John Doe said "Nice work!"
//    - 0 likes