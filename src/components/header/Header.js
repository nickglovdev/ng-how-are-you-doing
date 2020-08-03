import React from "react";
import Moment from 'react-moment';


const Header = (props) => {
    return (
        <header>
            <section>
                <div>
                    {/* <h2>{localStorage.getItem('user').replace(/['"]+/g, '')}</h2> */}
                </div>
                <div>
                    <h3><Moment format="MM/DD/YYYY">{props.date}</Moment></h3>
                </div>
            </section>
            <section>
                <div>
                    <img src={require(`./Logo.png`)} alt="Main Logo" />
                </div>
                <h2>How Are You Doing?</h2>
            </section>

        </header>
    )
}

export default Header