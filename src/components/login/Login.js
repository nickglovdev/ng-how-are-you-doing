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
      .then(userArrays => {
        let users= userArrays.find((user) => {
          if (user.username === credentials.user && user.password === credentials.password) {
            props.setUser(credentials)
            return user.username
          }
        })
        if (typeof (users) == "undefined") {
          props.history.push("/login")
          alert("Username or Password are Wrong")
        } else {
          const loggedUser = ("credintials", JSON.stringify(credentials.user))
          const userloggingId = ("activeUser", users.id)
          sessionStorage.id = userloggingId
          sessionStorage.user = loggedUser
          props.history.push("/")
        }
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
        <button type="button"  onClick={() => props.history.push(`/registration`)}>Register</button>
      </fieldset>
    </form>
  );
};

export default Login;