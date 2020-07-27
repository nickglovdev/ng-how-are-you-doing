import React, { useState } from "react"
import LoginManager from "../../modules/LoginManager"

const Login = props => {
  const [credentials, setCredentials] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    //Find all users
    LoginManager.getAll()
    .then(usernames => {
      usernames.find(username => {
        if(username.username === credentials.user && username.password === credentials.password) {
          const cred = ("credintials", JSON.stringify(credentials.user))
          const userloggingId = ("activeUser", username.id)
          sessionStorage.id = userloggingId
          sessionStorage.user = cred
          props.history.push("/");
        } else {
          alert("Password of Username is Wrong")
        }
      })
    })
  }
  
  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <label htmlFor="inputUser">User</label>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="user"
            id="user"
            placeholder="User"
            required="" autoFocus="" />
          
          <label htmlFor="inputPassword">Password</label>
          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;