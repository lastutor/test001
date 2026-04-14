const postForm = document.getElementById('post-form');
const postList = document.getElementById('post-list');

postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    post.appendChild(postTitle);
    post.appendChild(postContent);

    postList.prepend(post);

    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});