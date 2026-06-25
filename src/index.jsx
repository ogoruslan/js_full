// import * as $ from 'jquery';
// import Post from './post';
// import json from '@assets/data.json';
// import logo from '@assets/icon-square-big.png';
// import xml from '@assets/data.xml';
// import csv from '@assets/data.csv';

import React from "react";
import * as ReactDOM from "react-dom/client";

// import './model/lodash';

import '/style.css';
// import './less/style.less';
// import './scss/style.scss';
// import './sass/style.sass';

// console.log(logo);

// const post = new Post('Webpack Post Title', logo);

// $('pre').addClass('code').html(post.toString());

// console.log('Post to string:', post.toString());

// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);

const App = () => (
  <div className="container">
    <h1>Webpack training</h1>
    <p>Мій проект</p>
    <h4>WEBPACK my module</h4>
    <div className="logo"/>
    <pre/>
    <div className="less-demo">
      <h2>Less</h2>
    </div>
    <div className="sass-demo">
      <h2>Sass</h2>
    </div>
    <div className="scss-demo">
      <h2>Scss</h2>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);