    function addComment(event, postId) {
      event.preventDefault();
      const name = document.getElementById(`name-${postId}`).value;
      const message = document.getElementById(`message-${postId}`).value;

      const commentList = document.getElementById(`comments-list-${postId}`);
      const newComment = document.createElement('li');
      newComment.textContent = `${name}: ${message}`;
      
      commentList.appendChild(newComment);

      // Clear the form
      document.getElementById(`name-${postId}`).value = '';
      document.getElementById(`message-${postId}`).value = '';
    }
document.getElementById('search-button').addEventListener('click', function() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  filterPosts(searchTerm, true); // Pass true to show message if not found
});

// Update the event listener to trigger the filtering on input change
document.getElementById('search-bar').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  filterPosts(searchTerm, false); // Pass false to hide message if not found
});

function filterPosts(searchTerm, showMessage) {
  const allPosts = document.querySelectorAll('.post');
  let found = false;

  allPosts.forEach(post => {
    const postTitle = post.querySelector('h2').textContent.toLowerCase();
    if (postTitle.includes(searchTerm)) {
      post.style.display = 'block';  // Show the post
      found = true;
    } else {
      post.style.display = 'none';   // Hide the post
    }
  });

  if (!found && showMessage) {
    // Show a message if no posts match the search term and showMessage is true
    alert('No blogs found matching your search.');
  }
}
