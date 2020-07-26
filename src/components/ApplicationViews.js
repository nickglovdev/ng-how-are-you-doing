import {Route, Redirect} from "react-router-dom";
import React from "react";
import Login from "./login/Login"
import Home from "./home/Home";

const ApplicationViews = () => {
    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
    return (
        <React.Fragment>
            <Route path="/login" component={Login} />
            <Route exact path="/" render= {props => { return <Home /> }}/>
        </React.Fragment>
    )
}

export default ApplicationViews;