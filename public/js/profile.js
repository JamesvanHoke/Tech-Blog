const newFormHandler = async (event) => {
  event.preventDefault();

  const blog_name = document.querySelector('#blog-name').value.trim();
  const blog_body = document.querySelector('#blog-body').value.trim();

  if (blog_name && blog_body) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ blog_name, blog_body}),
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
