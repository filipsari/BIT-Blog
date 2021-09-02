import React  from "react";
import './BlogList.css';
import {getData} from '../../services/services'; 
<<<<<<< HEAD
import {useState, useEffect} from 'react'
import {Blog} from '../Blog/Blog'

export const BlogList = () => {
  

    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      getData().then((posts) => {
        setPosts(posts);
      });
    }, []);



    

      return (
          <div className="blogList">
            <h1>POSTS</h1>
          {posts.map( (post, userId) => (
            <Blog post={post} key={userId}/>
          ))}
=======
// import {useState, useEffect} from 'react'

export class BlogList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        blogs: []
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
          <div className="post-container">
            <h2>POSTS</h2>
          {this.state.blogs.map( (element) => {
           return ( 
              <div> 
                
              <h3>{element.title}</h3>
              <p>{element.body}</p>
            </div>)
          })
          }
>>>>>>> 7e94171c8344df92134aaeeff5e0b308a6ba1a7e
          </div>
      );
  

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
