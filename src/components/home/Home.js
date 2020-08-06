import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="home">
        <Link to="/questions"><button type="button"> Emotion Questions</button></Link>
        <Link to="/emotions"><button type="button"> Emotion Cards</button></Link>
      </div>
    </>
  )
}

export default Home;