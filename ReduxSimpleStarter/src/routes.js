import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import PostsIndex from './components/posts_index';


export default (
<Route path="/" component={App} >
  <IndexRoute component={PostsIndex} />
</Route>
);
//greet, greet2, greet3 are all children of app, passed as props.children
