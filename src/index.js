import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import "bootstrap/dist/css/bootstrap.css"
import background from "/Users/as/my-bankapp/src/assets/moneyflip.jpeg";
// import UserContext from "./Components/Context"
//import { useInRouterContext } from 'react-router';

ReactDOM.render(
  // <React.StrictMode>
    // <UserContext.Provider value={{users:[{name:'adhv', email:'adhv@email.com', password:'abc123', balance: 100}]}}>
      <App />,
    // {/* </UserContext.Provider>, */}
// {/* </React.StrictMode> */}
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
