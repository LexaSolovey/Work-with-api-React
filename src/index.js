import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom';
import './components/Home/index.css';
import Home from './components/Home';
import Movie from './components/Movie/Movie';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Movie} />
    </div>
  </HashRouter>,
  document.getElementById('root'));
registerServiceWorker();
