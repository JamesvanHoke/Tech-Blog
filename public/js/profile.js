const newFormHandler = async (event) => {
  event.preventDefault();

  const blog_name = document.querySelector('#blog-name').value.trim();
  const blog_body = document.querySelector('#blog-body').value.trim();

  if (blog_name && blog_body) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ blog_name, blog_body }),
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

const updateFormHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('#updateBtn').getAttribute('data-id');
  const blog_name = document.querySelector('#blog-name').value.trim();
  const blog_body = document.querySelector('#blog-body').value.trim();

  if (blog_name && blog_body) {
    const response = await fetch(`/api/posts/`, {
      method: 'PUT',
      body: JSON.stringify({ blog_name, blog_body, id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update blog');
    }
  }
};

const updateButtonHandler = async (event) => {
  
  const currentName = document
  .querySelector('#updateBtn')
  .getAttribute('data-name');
  const currentBody = document
  .querySelector('#updateBtn')
  .getAttribute('data-body');
  
  // Updates elements on page
  document.querySelector('#sendUpdate').classList.remove('d-none');
  document.querySelector('#createBtn').classList.add('d-none');
  document.querySelector('#CANB').innerHTML = 'Update your Blog:';
  document.querySelector('#title').innerHTML = 'Update your blog title.';
  document.querySelector('#body').innerHTML = 'Update your blog body.';
  document.querySelector('#blog-name').value = currentName;
  document.querySelector('#blog-body').value = currentBody;
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#deleteBtn')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('#updateBtn')
  .addEventListener('click', updateButtonHandler);

document
  .querySelector('#sendUpdate')
  .addEventListener('click', updateFormHandler);
