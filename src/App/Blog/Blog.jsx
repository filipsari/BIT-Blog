import React from 'react';

import {Link} from 'react-router-dom';

import './Blog.css'

export const Blog = (props) => {
    return(
        <Link to = '/'>
        <div className="blogItem" > 
              <h3>{props.post.title}</h3>
              <p>{props.post.body}</p>
            </div>
        </Link>
    )
}