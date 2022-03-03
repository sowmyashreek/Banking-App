import React from "react"
import { Card } from "./Card";
import { UserContext } from "./Context"

function Withdraw(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="Withdraw"
      title="Enter Withdrawal Amount:"
      text="$0.00"
      body={(<img src="/Users/as/my-bankingapp/public/bank.png" className="img-fluid" alt="Responsive"/>)}
     />
  );
}

export default Withdraw;