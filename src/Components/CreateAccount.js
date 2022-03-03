import React from "react"
import { Card } from "./Card"
import { UserContext } from "./Context"

function CreateAccount() {
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  console.log(JSON.stringify(ctx))

  function validate(field, label) {
    if (!field) {
      // setStatus('Error: ' + label);
      setStatus(`Please provide valid ${label}`)
      setTimeout(() => setStatus(''), 3000);
      // this delay is just for the purpose of illustrating a typical interaction with something like this bc it won't be instant
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name, email, password, balance:100});
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

//   return (
//     <Card
//       bgcolor="primary"
//       txtcolor="white"
//       header="Create Account"
//       title="Create a New Account Here"
//       text=" test "
//       // below for the body we are using a ternary expression -- depending on the value of show (which is initialized above to true), we will show one form or the other
//       body={(<img src="../bank.png" className="img-fluid" alt="Responsive"/>)}
//      />
//   )
// }

  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="Create Account"
      status={status} // something we will pass based on the actions that are taken
      title="Create a New Account Here"
      text="$100 instantly credited to your new account upon approval!"
      // below for the body we are using a ternary expression -- depending on the value of show (which is initialized above to true), we will show one form or the other
      body={show ? ( 
        <>
        Name<br/>
        <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e=> setName(e.currentTarget.value)}/><br/>
        Email Address<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e=> setEmail(e.currentTarget.value)}/><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e=> setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn-btn-light" onClick={handleCreate}>Create Account</button>
        </>
      ):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
     />
  )
}

export default CreateAccount;