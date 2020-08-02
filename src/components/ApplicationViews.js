import {Route, Redirect} from "react-router-dom"
import React from "react"
import Login from "./login/Login"
import Home from "./home/Home"
import QuestionsList from "./questions/QuestionsList"
import EmotionsList from "./emotions/EmotionsList"
import EmotionsEditForm from "./emotions/EmotionsEditForm"

const ApplicationViews = () => {
    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
    return (
        <React.Fragment>
            <Route path="/login" component={Login} />
            <Route exact path="/" render= {props => { return <Home /> }}/>
            <Route exact path="/questions" render={props => {
                return <QuestionsList {...props}/>
            }} />
            <Route exact path="/emotions" render={props => {
                return <EmotionsList {...props}/>
            }} />
            <Route path="/emotions/:emotionsId(\d+)/edit" render={props => {
                return <EmotionsEditForm {...props} />
            }} />
        </React.Fragment>
    )
}

export default ApplicationViews;