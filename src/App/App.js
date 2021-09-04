import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { BlogList } from "./BlogList/BlogList";
import { Author } from "./Author/Author";
import { notFound } from "../entities/entities";
import { About } from "./About/About";
// import { User } from "./User/User";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />

      <Switch>
        <Route exact path="/" component={BlogList} />
        <Route path="/author" component={Author} />
        <Route path="/users/:userId" component={Author} />
        <Route path="/not-found" component={notFound} />
        <Route path="/about" component={About} />
        <Redirect from="/" to="/not-found" />
      </Switch>

      <Footer />
    </Fragment>
  );
}

export default App;
