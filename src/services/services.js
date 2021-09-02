const endPoint = "https://jsonplaceholder.typicode.com";


export const getData = () => {

    return fetch(`${endPoint}/posts`)
    .then((result) => result.json())
<<<<<<< HEAD
    .then((posts) => {
        return posts.slice(0,4);
=======
    .then((blogs) => {
        return blogs.slice(0,7);
>>>>>>> 7e94171c8344df92134aaeeff5e0b308a6ba1a7e
    });
};

export const getAuthors = () => {

    return fetch(`${endPoint}/users`)
    .then((result) => result.json())
    .then((users) => {
        return users.slice(0,5);
    });
};

