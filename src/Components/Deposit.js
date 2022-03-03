import React from "react"
import { Card } from "./Card"
import { UserContext } from "./Context"

function Deposit(){

  const [show, setShow]         = React.useState(true);
  const [deposit, setDeposit] = React.useState(0);
  // const [status, setStatus] = React.useState('')
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  
//   function handleDeposit() {
//   return (
//     100 + deposit
//   )
// }
  // function testShow() {
  //   setShow(!show);
  //   console.log(`this is a show test and the current value of show is ${show}`);
  // }

  // testShow();

  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="Deposit"
      title="Enter deposit amount:"
      body=
        {show ? ( 
        <>
        <input type="input" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e=> setDeposit(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn-btn-light" disabled={deposit === '' || deposit === 0 || deposit < 0} onClick={console.log("submit clicked")}>Submit Deposit</button>
        </>
      ):(
        <>
        <h5>Success</h5>
        </>
      )}
     />
  );
}







export default Deposit;