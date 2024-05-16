  window.onload =function(){
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    const blogContainer = document.getElementById('blog-container');

posts.forEach(function(post){
    const postElement = document.createElement('div');
    postElement.innerHTML = `
        <h2 id = "title">${post.title}</h2>
        <p id= "content">${post.content}</p>
        <p id= "username">Posted by: ${post.username}</p>`;

    blogContainer.appendChild(postElement);
});
};