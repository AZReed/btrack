const api = process.env.REACT_APP_READABLE_API || "http://localhost:3000/api";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const fetchUsers = (q = "") =>
  fetch(`${api}/users?${q}`, { headers })
    .then(res => res.json())
    .catch(error => error);

export const fetchUsersPage = (page, limit) => {
  return fetch(`${api}/users?_page=${page}&_limit=${limit}`, { headers })
    .then(res => res.json())
    .catch(error => error);
}

export const deleteUser = id =>
  fetch(`${api}/users/${id}`, { headers, method: "DELETE" })
    .then(res => res.json())
    .catch(error => error);

export const addUser = user =>
  fetch(`${api}/users`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      name: user.name,
      description: user.description,
      photo: user.photo
    })
  })
    .then(res => res.json())
    .catch(error => error);
