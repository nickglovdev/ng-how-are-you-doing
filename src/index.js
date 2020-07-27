import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import HowAreYouDoing from "./components/HowAreYouDoing"


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <header />
        <HowAreYouDoing/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
