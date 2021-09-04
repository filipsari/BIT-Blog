const endPoint = "https://jsonplaceholder.typicode.com";


export const getData = () => {

    return fetch(`${endPoint}/posts`)
    .then((result) => result.json())
    .then((posts) => {
        return posts.slice(0,4);
    });
};

export const getAuthors = () => {

    return fetch(`${endPoint}/users`)
    .then((result) => result.json())
    .then((users) => {
        return users.slice(0,5);
    });
};

