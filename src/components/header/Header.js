import React from "react";
import Moment from 'react-moment';
import { Link, withRouter } from "react-router-dom";


const Header = (props) => {
    const clearUser = () => {
        sessionStorage.clear()
        props.history.push("/")
    }
    return (
        <header>
            <section>
                <div>
                    <h3><Moment format="MM/DD/YYYY">{props.date}</Moment></h3>
                </div>
            </section>
            <section>
                <div>
                    <img src={require(`./Logo.png`)} alt="Main Logo" />
                </div>
                <h2>How Are You Doing?</h2>
                <nav>
                    <ul>
                        <li><Link to="/questions">Emotion Questions</Link></li>
                        <li><Link to="/emotions">Emotion Cards</Link></li>
                        <li><Link to="/profiles">Profile Info</Link></li>
                       {sessionStorage.getItem("user") ?  <li><Link onClick={() => clearUser()} to="/login">Logout</Link></li> : null}
                    </ul>
                </nav>
            </section>

        </header>
    )
}


export default withRouter(Header)