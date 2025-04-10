document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postList = document.getElementById('post-list');
    const loginForm = document.getElementById('login-form');

    if (postForm) {
        postForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const postContent = document.getElementById('post-content').value;
            if (postContent) {
                const postItem = document.createElement('div');
                postItem.textContent = postContent;
                postList.appendChild(postItem);
                document.getElementById('post-content').value = '';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                alert('Авторизация успешна!');
                // Здесь можно добавить логику для проверки пользователя через API
            }
        });
    }
}); 