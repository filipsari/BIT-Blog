


import React from "react";
import './BlogList.css';
import {getData} from '../../services/services'; 
import {useState, useEffect} from 'react'



export const BlogList = () => {
  const [posts, setPost] = useState([])

  useEffect( () => {
    getData().then(posts => {
      setPost (posts);
     })
  }, [] )
return (

  <div>  

  {posts.map( (element) => {
    <div>  
     <h1> {element.title}</h1>
     <p> {element.body} </p>   
</div>
  })}
  </div>





// <div className="post-container">
//   <h1>POSTS</h1>
// <a href="#"> Title 1</a>
// <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>


// <a href="#"> Title 2</a>
// <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>


// <a href="#"> Title 3</a>
// <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>


// <a href="#"> Title 4</a>
// <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

//  </div>

)
};
