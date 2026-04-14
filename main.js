const postForm = document.getElementById('post-form');
const postList = document.getElementById('post-list');

// Load existing posts from local storage
const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

for (const savedPost of savedPosts) {
    const post = createPostElement(savedPost.title, savedPost.content);
    postList.appendChild(post);
}

postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    const post = createPostElement(title, content);
    postList.prepend(post);

    // Save the new post to local storage
    savedPosts.unshift({ title, content });
    localStorage.setItem('posts', JSON.stringify(savedPosts));

    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
});

function createPostElement(title, content) {
    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    post.appendChild(postTitle);
    post.appendChild(postContent);

    return post;
}
