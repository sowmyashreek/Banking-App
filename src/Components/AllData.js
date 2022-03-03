import React from "react"
import { Card } from "./Card"
import { UserContext } from "./Context"

function AllData() {
  const ctx = React.useContext(UserContext);
  console.log(ctx)

  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="All Data"
      title="Account Data:"
      text={JSON.stringify(ctx)}
      body={(<img src="/Users/as/my-bankingapp/public/bank.png" className="img-fluid" alt="Responsive"/>)}
    />
  );
}

export default AllData;