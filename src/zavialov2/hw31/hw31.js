async function getData(segment) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com" + segment,
    );

    if (!response.ok) {
      return response.status;
    }

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);

    return error.message;
  }
}
getData("/posts");

async function postData(segment, data) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com" + segment,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      return response.status;
    }

    const result = await response.json();

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);

    return error.message;
  }
}
postData("/posts", {
  title: "My first post",
  body: "Hello world",
});
async function putData(id, data) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      return response.status;
    }

    const result = await response.json();

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);

    return error.message;
  }
}
putData(1, {
  id: 1,
  title: "New title",
  body: "New text",
});
async function patchData(id, data) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      return response.status;
    }

    const result = await response.json();

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);

    return error.message;
  }
}
patchData(1, {
  title: "Updated title",
});
async function deleteData(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      console.log(
        `Failed to delete post with id ${id}. Status: ${response.status}`,
      );

      return response.status;
    }

    console.log(`Post with id ${id} has been successfully deleted.`);

    return true;
  } catch (error) {
    console.log(`Error during deletion: ${error.message}`);

    return error.message;
  }
}
deleteData(1);
export { getData, postData, putData, patchData, deleteData };
