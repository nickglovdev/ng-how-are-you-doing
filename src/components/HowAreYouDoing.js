import React, { useState } from "react";
import ApplicationViews from "./ApplicationViews"
import "./HowAreYouDoing.css"
import Header from "./header/Header"



const HowAreYouDoing = () => {

    // Hold on to hasUser value
  // Make sure it has a value
  const isAuthenticated = () => localStorage.getItem("credentials") !== null;
  // Is to change to whether they are logged in
  const [hasUser, setHasUser] = useState(isAuthenticated());
  // Sets a user to pass in a user
  const setUser = user => {
    localStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  const clearUser = () => {
    localStorage.clear();
    setHasUser(isAuthenticated());
  }
    return (
        <>
            <Header hasUser={hasUser} clearUser={clearUser} />
            <ApplicationViews hasUser={hasUser} setUser={setUser} />
        </>
    )
}

export default HowAreYouDoing
