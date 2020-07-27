import React from "react"

const Home = () => {
    return (
        <>
          <div className="home">
    <h2>How are you doing {sessionStorage.getItem('user').replace(/['"]+/g, '')}</h2>
          </div>
        </>
    )
}

export default Home;