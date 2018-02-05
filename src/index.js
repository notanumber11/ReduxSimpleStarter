import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, PropsRoute, Switch } from "react-router-dom";
import promise from "redux-promise"

import reducers from './reducers';
import PostsIndex from "./components/posts_index"
import PostNew from "./components/post_new"
import PostsShow from "./components/posts_show"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/post/new" component = { PostNew }/>
          <Route path="/post/:id" component = { PostsShow }/>
          <Route path="/" component = { PostsIndex }/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
