import React from "react";
import Moment from 'react-moment';
import { Link, withRouter } from "react-router-dom";
import "./Header.css"


const Header = (props) => {
    const clearUser = () => {
        sessionStorage.clear()
        props.history.push("/")
    }
    return (
        <header className="headerContainer">
            <section>
                <div>
                    <h3 className="headerTime"><Moment format="MM/DD/YYYY">{props.date}</Moment></h3>
                </div>
            </section>
            <section>
                <div>
                    <img className="imageHeader" src={require(`./Logo.png`)} alt="Main Logo" />
                </div>
                <h2 className="headerText">How Are You Doing?</h2>
            </section>
            <nav class="headerNav">
                <ul>
                    <li><Link to="/questions">Emotion Questions</Link></li>
                    <li><Link to="/emotions">Emotion Cards</Link></li>
                    <li><Link to="/profiles">Profile Info</Link></li>
                    {sessionStorage.getItem("user") ? <li><Link onClick={() => clearUser()} to="/login">Logout</Link></li> : null}
                </ul>
            </nav>

        </header>
    )
}


export default withRouter(Header)