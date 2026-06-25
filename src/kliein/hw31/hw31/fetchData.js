import { fetchData } from "./api.js";

fetchData('/posts/1')
    .then(result => console.log(result))
    .catch(error => console.error(error));

fetchData('/posts')
    .then(result => console.log(result))
    .catch(error => console.error(error));