import { Route, Redirect } from "react-router-dom"
import React from "react"
import Login from "./login/Login"
import Home from "./home/Home"
import QuestionsList from "./questions/QuestionsList"
import EmotionsList from "./emotions/EmotionsList"
import ProfilesList from "./profiles/ProfilesList"

const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser; // checks to see if user is logged in
    console.log(hasUser)
    return (
        <React.Fragment>
            <Route path="/login" render={props => {
                return <Login setUser={setUser} {...props} />
            }} />
            <Route exact path="/" render={props => { return <Home /> }} />

            <Route exact path="/questions" render={props => {
                if (hasUser) {
                    return <QuestionsList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

            <Route exact path="/emotions" render={props => {
                if (hasUser) {
                    return <EmotionsList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

            <Route exact path="/profiles" render={props => {
                if (hasUser) {
                    return <ProfilesList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

            {/* <Route path="/emotions/:emotionsId(\d+)/edit" render={props => {
                return <EmotionsEditForm {...props} />
            }} /> */}
        </React.Fragment>
    )
}

export default ApplicationViews;