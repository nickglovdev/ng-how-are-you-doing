import React from "react";
import { Link, withRouter } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="home">
        <Link to="/questionslist"><button type="button"> Emotion Questions</button></Link>
        <Link to="/emotionslist"><button type="button"> Emotion Cards</button></Link>
      </div>
    </>
  )
}

export default Home;