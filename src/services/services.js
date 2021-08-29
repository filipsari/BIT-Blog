const endPoint = "https://jsonplaceholder.typicode.com/posts";


export const getData = () => {

    return fetch(endPoint)
    .then((result) => result.json())
    .then((blogs) => {
        console.log(blogs)
        return blogs;
    });
};


