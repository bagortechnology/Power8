// Get the form, input field, message box, and post list
const form = document.getElementById("form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const posts = document.getElementById("posts");

// Add event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // If the input is empty, display an error message
  if (input.value.trim() === "") {
    msg.innerHTML = "Post cannot be blank";
    msg.classList.add("error");
    input.classList.add("error");
  } else {
    // Otherwise, add the new post to the post list and clear the input field
    msg.innerHTML = "";
    msg.classList.remove("error");
    input.classList.remove("error");
    addPost(input.value.trim());
    input.value = "";
  }
});

// Function to add a new post to the post list
const addPost = (postText) => {
  const postItem = document.createElement("div");
  postItem.classList.add("post-item");

  const postContent = document.createElement("p");
  postContent.innerText = postText;
  postItem.appendChild(postContent);

  const postOptions = document.createElement("span");
  postOptions.classList.add("options");

  const editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-edit");
  postOptions.appendChild(editIcon);

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash-alt");
  postOptions.appendChild(deleteIcon);

  postItem.appendChild(postOptions);

  posts.appendChild(postItem);
};
