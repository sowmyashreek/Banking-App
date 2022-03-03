import React from "react"
import { Card } from "./Card";
import { UserContext } from "./Context"

function Home() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);
  return (
    <div className="money-saving">
    <Card
      bgcolor="success"
      txtcolor="white"
      header="Bank Page"
      title="Welcome to the Bank"
      text="Save money Save Life"
      body={(<img src="../bank.png" className="img-fluid" alt="Responsive"/>)}
     />
     </div>
  );
}

export default Home