import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsNew from './components/posts_new';
import PostsIndex from './components/posts_index';


export default (
<Route path="/" component={App} >
  <IndexRoute component={PostsIndex} />
  <Route path="posts/new" component={PostsNew} />
</Route>
);

//if route only matches parent '/' path, then direct to IndexRoute and shows PostsIndex
//greet, greet2, greet3 are all children of app, passed as props.children
