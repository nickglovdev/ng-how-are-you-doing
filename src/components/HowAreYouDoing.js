import React, { useState } from "react";
import ApplicationViews from "./ApplicationViews"
import Header from "./header/Header"
import "./HowAreYouDoing.css"

const HowAreYouDoing = () => {

    // Hold on to hasUser value
  // Make sure it has a value
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  // Is to change to whether they are logged in
  const [hasUser, setHasUser] = useState(isAuthenticated());
  // Sets a user to pass in a user
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
    return (
        <>
            <Header />
            <ApplicationViews hasUser={hasUser} setUser={setUser} />
        </>
    )
}

export default HowAreYouDoing
