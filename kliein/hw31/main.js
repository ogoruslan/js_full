import { fetchData, postData, deletePost } from './api.js';

fetchData('/posts/1')
    .then(result => console.log(result))
    .catch(error => console.error(error));

fetchData('/posts')
    .then(result => console.log(result))
    .catch(error => console.error(error));

postData('/posts', {
    title: 'Новий пост',
    body: 'Текст поста',
    userId: 1
})
.then(result => console.log(result))
.catch(error => console.error(error));

deletePost(1)
    .then(result => console.log(result))
    .catch(error => console.error(error));