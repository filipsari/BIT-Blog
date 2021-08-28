
import React, {Fragment} from "react"
import './App.css';
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {BlogList} from './BlogList/BlogList';







function App() {
  return (
    <Fragment> 

      <Header/>
      <BlogList/>
      <Footer/> 
      
      </Fragment>
  )
}

export default App;
