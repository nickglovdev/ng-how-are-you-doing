import React, { useState, useEffect } from "react";
import LoginManager from "../../modules/LoginManager";
import "./Login"


const Registration= (props) => {

    const [credentials, setCredentials] = useState({ username: "", password: "", rePassword: "", email: "", twitter: "", facebook: "", linkedin: "" })

    const fieldChange = evt => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);


    }
    const createNewUser = (evt) => {
        evt.preventDefault()
            console.log("hello")
            // Selection values to be used in the code below
            const createUsername = document.querySelector("#username").value;
            const createPassword = document.querySelector("#password").value;
            const reInputPassword = document.querySelector("#rePassword").value;
    
            LoginManager.getAll()
                .then(userArray => {
                    // Checking JSON for similar input and JSON in the database.
                    const accountCheck = userArray.some(credentials => credentials.username === createUsername)
                    // If user username is already in the JSON then an error will be reported
                    if (accountCheck) {
                        alert("Username is Already Taken")
                    } else if (createPassword !== reInputPassword) {
                        alert("Passwords Do not match")
                    
                    } else if (credentials.username === "" || credentials.password === "") {
                        alert("No Information inputed into Username or Password")
                     } else {
                       LoginManager.post(credentials)
                            .then(user => {
                                sessionStorage.clear();
                                props.setUser(credentials)
                                sessionStorage.id = user.id
                                sessionStorage.user = user.username
                                props.history.push("/profiles")
                            })
                    }
                })
    
        

    }     
        return (
            
                <form className="registrationForm">
                    <fieldset>
                        <div className="formgrid">
                        <label htmlFor="username"><span className="requiredRed">* </span>Username:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={fieldChange}
                                id="username"
                                value={credentials.username}
                            />
                            <label htmlFor="password"><span className="requiredRed">* </span>Password:</label>
                            <input
                                type="password"
                                required
                                className="form-control"
                                onChange={fieldChange}
                                id="password"
                                value={credentials.password}
                            />
                            <label htmlFor="password"><span className="requiredRed">* </span>Re Enter Password:</label>
                            <input
                                type="password"
                                required
                                className="form-control"
                                onChange={fieldChange}
                                id="rePassword"
                                value={credentials.rePassword}
                            />
                        <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={fieldChange}
                                id="email"
                                value={credentials.email}
                            />
                            <label htmlFor="twitter">Twitter:</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={fieldChange}
                                id="twitter"
                                value={credentials.twitter}
                            />
                            <label htmlFor="facebook">Linkedin:</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={fieldChange}
                                id="facebook"
                                value={credentials.facebook}
                            />
                            <label htmlFor="facebook">Facebook:</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={fieldChange}
                                id="linkedin"
                                value={credentials.linkedin}
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                onClick={createNewUser}
                                className="btnRegister"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            
        );
}

export default Registration