import React from "react"
import { Card } from "./Card";
import { UserContext } from "./Context"

function Login() {
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="Login page"
      title="Account Login:"
      text="User ID: _______ Password: _______"
      body={(<img src="/Users/as/my-bankingapp/public/bank.png" className="img-fluid" alt="Responsive"/>)}
     />
  );
}

export default Login;