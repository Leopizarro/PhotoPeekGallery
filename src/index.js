import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import App2 from './App2';
import Landing from './components/Landing';
import Slider from './components/Carousel';
import ControlledCarousel from './components/CarouselCG'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import SignIn from './components/SignIn';

const routing = (
  <Router>
    <div className="content">
      <Switch>
        <Route exact path="/" component= {Landing} />
        <Route exact path="/spraypaint" component={App} />
        <Route exact path="/photos" component={App2} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
