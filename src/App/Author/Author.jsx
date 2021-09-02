import React from "react";

import {useState, useEffect} from 'react'
import {getAuthors} from '../../services/services'
import {Link} from 'react-router-dom'

import './Author.css';



export const Author = () => {

  const [users,setUsers] = useState([]);

  useEffect(() => {
    getAuthors().then((users) => {
      setUsers(users);
    });
  }, []);

  


return (
<div className="author-container">
       <h1>AUTHORS({users.length})</h1>
    
       {users.map( (element , userId) => (
            <Link to={`/author/${props.author.id}`}>
            <p key={userId}>{element.name} </p>
            </Link>
          ))}



</div>
)
};
