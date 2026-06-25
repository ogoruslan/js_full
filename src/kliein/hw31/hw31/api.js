const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchData(segment) {
    const response = await fetch(`${BASE_URL}${segment}`);

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
}

export async function postData(segment, data) {
    const response = await fetch(`${BASE_URL}${segment}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    return await response.json();

}

export async function deletePost(id) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            return `Error: ${response.status}`;
        }

        return true;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}