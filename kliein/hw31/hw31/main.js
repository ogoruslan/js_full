import { fetchData, postData, deletePost } from './api.js';

const fetchPost1Btn = document.getElementById('btn-fetch-post-1');
const fetchAllPostsBtn = document.getElementById('btn-fetch-posts');
const createPostBtn = document.getElementById('btn-post-new');
const deletePostBtn = document.getElementById('btn-delete-post');
const results = document.getElementById('results');

fetchPost1Btn.addEventListener('click', async () => {
    await fetchData('/posts/1')
        .then(result => {
            console.log(result)
            results.innerHTML = JSON.stringify(result);
        })
        .catch(error => console.error(error));

})

fetchAllPostsBtn.addEventListener('click', async () => {
    await fetchData('/posts')
        .then(result => {
            console.log(result)
            results.innerHTML = JSON.stringify(result);

        })
        .catch(error => console.error(error));
})

createPostBtn.addEventListener('click', async () => {
    await postData('/posts', {
        title: 'Новий пост',
        body: 'Текст поста',
        userId: 1
    })
        .then(result => {
            console.log(result)
        })
        .catch(error => console.error(error));
})

deletePostBtn.addEventListener('click', async () => {
    await deletePost(1)
        .then(result => console.log(result))
        .catch(error => console.error(error));

})