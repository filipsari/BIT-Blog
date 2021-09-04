const endPoint = "https://jsonplaceholder.typicode.com";

export const getData = () => {
  return fetch(`${endPoint}/posts`)
    .then((result) => result.json())
    .then((blogs) => {
      return blogs.slice(0, 5);
    });
};

export const getPost = (id) => {
  return fetch(`${endPoint}/posts/${id}`).then((response) => response.json());
};

export const getAuthorName = (userId) => {
  return fetch(`${endPoint}/users/${userId}`)
    .then((response) => response.json())
    .then((userData) => userData.name);
};

export const getMorePosts = (userId) => {
  return fetch(`${endPoint}/users/${userId}/posts`)
    .then((response) => response.json())
    .then((userPosts) => {
      return userPosts.sort(() => 0.5 - Math.random()).slice(0, 3);
    });
};

export const getAuthors = () => {
  return fetch(`${endPoint}/users`)
    .then((result) => result.json())
    .then((users) => {
      return users.slice(0, 5);
    });
};
