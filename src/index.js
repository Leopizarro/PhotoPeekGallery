import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  HashRouter,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import App2 from './App2';
import Landing from './components/Landing';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import SignIn from './components/SignIn';
import { Helmet } from 'react-helmet';

const TITLE = 'PHOTOPEEK HOME';
const routing = (
  <HashRouter basename="/">
    <div className="content">
      <Helmet>
          <title>{ TITLE }</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component= {Landing} />
        <Route exact path="/spraypaint" component={App} />
        <Route exact path="/photos" component={App2} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  </HashRouter>
);

ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
