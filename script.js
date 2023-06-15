// define API in const
const API = "https://jsonplaceholder.typicode.com";

async function getData() {
  try {
    let posts_data = await fetch(`${API}/posts`); // fetching posts data from api endpoint
    let allPosts = await posts_data.json(); // converting posts data into JSON
    showAllPosts(allPosts);
  } catch (error) {
    console.log(error);
  }
}

// function that iterates over all posts and displays user and comments corresponding to them
async function showAllPosts(posts) {
  posts.forEach(async function (post) {
    let user = await fetchUsers(post.userId);
    let comments = await fetchComments(post.id);
    showAllData(post, comments, user);
  });
}

// function for fetching comments for particular post
async function fetchComments(post_id) {
  let comments_data = await fetch(`${API}/posts/${post_id}/comments`);
  let allComments = await comments_data.json();
  return allComments;
}

// function for fetching users of corresponding posts
async function fetchUsers(user_id) {
  let users_data = await fetch(`${API}/users/${user_id}`);
  let allUsers = await users_data.json();
  return allUsers;
}

// function for rendering all the data in UI
function showAllData(post, comments, user) {
  let container = document.querySelector(".container");
  let rowDiv = document.createElement("div");
  rowDiv.className = "row";
  let cardDiv = document.createElement("div");
  cardDiv.className = "col";
  let div = document.createElement("div");
  let childDiv = document.createElement("div");
  div.className = "card";
  childDiv.className = "content";
  div.appendChild(childDiv);

  // create element which includes necessary data
  childDiv.innerHTML = `<h5 class="user-name heading">
                    ${user.name}
                  </h5>
                  <div class="post-title para">
                    <h4><b>Post-Title</b></h4> ${post.title}
                  </div>
                  <div class="post-body para">
                  <h4><b>Post-Body</b></h4> ${post.body}
                  </div>
                  <div class="post-body comment-box">
                    Show Comments
                  </div>
                  <div class="post-body comment-box-body" style="display:none">
                    <h2>Comments:</h2>
                  ${comments
                    .map(
                      (comment) =>
                        `<li class="para"><i>${comment.body}</i></li>`
                    )
                    .join("")}
                  </div>
                  `;
  cardDiv.appendChild(div);
  rowDiv.appendChild(cardDiv);
  container.appendChild(rowDiv);

  let commentBox = div.querySelector(".comment-box");
  let commentBoxBody = div.querySelector(".comment-box-body");

  // apply click event on show/hide comment button
  commentBox.addEventListener("click", async () => {
    if (commentBoxBody.style.display === "none") {
      commentBoxBody.style.display = "block";
      commentBox.innerText = "Hide Comments";
    } else {
      commentBoxBody.style.display = "none";
      commentBox.innerText = "Show Comments";
    }
    adjustCardHeight();
  });
}

// function for adjustCardHeight while showing comments
function adjustCardHeight() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    let content = card.querySelector(".content");
    let commentBoxBody = card.querySelector(".comment-box-body");
    if (commentBoxBody.style.display === "none") {
      content.style.height = "auto";
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
}

getData();
