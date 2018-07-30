import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <aside>
          <p className="selected">About</p>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/themes">Themes</Link>
          </p>
        </aside>        
      </div>
    );
  }
}

export default Home;