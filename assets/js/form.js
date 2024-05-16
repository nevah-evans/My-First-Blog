// let username = document.getElementById('username');
// let title = document.getElementById('title');
// let content = document.getElementById('content');
const submitBtn = document.getElementById('submit');
document.getElementById('form').reset();


submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    let form = {
        username: username.value, 
        title: title.value, 
        content: content.value,};
    
    
    if ( !username.value || !title.value || !content.value) {
        alert('Please fill out form.');
        } else {
            const newPost = {
                username: username.value, 
                title: title.value, 
                content: content.value,};
       
        storePost(newPost);
        window.location.href = 'blog.html';
    };
    });

    function storePost(post){
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  
    }
    function resetBlog(){
        document.getElementById('blogForm').reset();
     }
    