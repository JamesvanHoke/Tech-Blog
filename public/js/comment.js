const newCommentHandler = async (event) => {
  event.preventDefault();
  
  const post_id = document.querySelector("#commentBtn").getAttribute('data-id');
  const comment_text = document.querySelector('#comment').value.trim();

  if (post_id && comment_text) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text, post_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

document
.querySelector('#commentBtn')
.addEventListener('click', newCommentHandler);
