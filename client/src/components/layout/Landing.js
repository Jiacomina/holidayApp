import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Plan</b> your holiday with the {" "}
              <span style={{ fontFamily: "monospace" }}>TRAVEL</span> app from
              scratch.
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a simple and minimalistic travel plan for you and your mates.
            </p>
            <br />
            <Link
                to="/register"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable dark-green accent-3"
            >
              Register
            </Link>
            <Link
            to="/login"
              style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;