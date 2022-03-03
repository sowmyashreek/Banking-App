import React from "react"
// import ReactBootstrap from "react-bootstrap"
// import axios from "axios"
import Home from "./Components/Home"
import Login from "./Components/Login"
import AllData from "./Components/AllData"
import CreateAccount from "./Components/CreateAccount"
import { UserContext } from "./Components/Context"
import Deposit from "./Components/Deposit"
import NavBar from "./Components/NavBar"
import Withdraw from "./Components/Withdraw"
import Balance from "./Components/Balance"
import background from "/Users/as/my-bankapp/src/assets/moneyflip.jpeg";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <NavBar/>
        <UserContext.Provider value={{users:[{name:'shree', email:'sk@as.com', password:'abcd01', balance: 100}]}}>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="createaccount" element={<CreateAccount />} />
        <Route path="login" element={<Login />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="balance" element={<Balance />} />
        <Route path="alldata" element={<AllData />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <NavBar/>
//       <Login />
//       </>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           This will be a Bad Bank
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;