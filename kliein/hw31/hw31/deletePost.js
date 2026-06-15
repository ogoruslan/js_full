import { deletePost } from "./api.js";

deletePost(1)
    .then(result => console.log(result))
    .catch(error => console.error(error));