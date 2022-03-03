import React from "react"
import { Card } from "./Card";
import { UserContext } from "./Context"


function Balance(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="Balance"
      title="Your current balance is:"
      text={ctx.users[0].balance}
      body={(<img src="/Users/as/my-bankingapp/public/bank.png" className="img-fluid" alt="Responsive"/>)}
     />
  );
}

export default Balance;