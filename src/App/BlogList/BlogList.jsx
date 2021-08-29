


import React, { Component } from "react";
import './BlogList.css';
import {getData} from '../../services/services'; 
import {useState, useEffect} from 'react'

export class BlogList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        blogs = []
      }
    }

componentDidMount(){
  getData()
  .then(blogs => {
    this.setState({blogs})
  })
}


    render () {

      return (
          <div>
          {this.state.blogs.map( (element) => {
            <div> 
              <h3>{element.title}</h3>
              <p>{element.body}</p>
            </div>
          })
          }
          </div>
      )
    }

}




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

// )
// };
