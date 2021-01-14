import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
// import Register from './register';
// import App from './App';
import Header from './header';
import Footer from './footer';
import Body from './body';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery.min.js";
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register /> */}
    {/* <Login /> */}
    <Header/>
    < Body />
    < Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
