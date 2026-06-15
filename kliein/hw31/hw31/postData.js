import { postData } from "./api.js";

postData('/posts', {
    title: 'Новий пост',
    body: 'Текст поста',
    userId: 1
})
.then(result => console.log(result))
.catch(error => console.error(error));