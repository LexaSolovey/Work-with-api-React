import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import './components/Home/index.css';
import Home from './components/Home/index';
import Movie from './components/Movie/Movie';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Movie} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
