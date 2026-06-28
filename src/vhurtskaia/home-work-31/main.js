const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getData(segment) {
  try {
    const response = await fetch(BASE_URL + segment);

    if (!response.ok) {
      console.error(response.status);
      return response.status;
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function postData(segment, data) {
  try {
    const response = await fetch(BASE_URL + segment, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Error:", response.status);
      return response.status;
    }

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function putData(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Error:", response.status);
      return response.status;
    }

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function patchData(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Error:", response.status);
      return response.status;
    }

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
    return error.message;
  }
}

async function deleteData(id) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(`Failed to delete post with id ${id}. Status: ${response.status}`);
      return response.status;
    }

    console.log(`Post with id ${id} has been successfully deleted.`);
    return true;
  } catch (error) {
    console.error(`Error during deletion: ${error.message}`);
    return error.message;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  function showResult(result) {
    output.textContent =
      typeof result === "object"
        ? JSON.stringify(result, null, 2)
        : result;
  }

  document.getElementById("getForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const segment = document.getElementById("getSegment").value;

    const result = await getData(segment);

    showResult(result);
  });

  document.getElementById("postForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const result = await postData("/posts", {
      title: document.getElementById("postTitle").value,
      body: document.getElementById("postBody").value,
      userId: Number(document.getElementById("postUserId").value),
    });

    showResult(result);
  });

  document.getElementById("putForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const result = await putData(
      document.getElementById("putId").value,
      {
        title: document.getElementById("putTitle").value,
        body: document.getElementById("putBody").value,
        userId: 1,
      }
    );

    showResult(result);
  });

  document.getElementById("patchForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const result = await patchData(
      document.getElementById("patchId").value,
      {
        title: document.getElementById("patchTitle").value,
      }
    );

    showResult(result);
  });

  document.getElementById("deleteForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const result = await deleteData(
      document.getElementById("deleteId").value
    );

    showResult(result);
  });
});