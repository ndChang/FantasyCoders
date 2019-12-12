import React from "react";
import { NavLink } from "react-router-dom";
import "./TeamRoster.css";
import Axios from "axios";
import Header from '../shared/Header'

class TeamRoster extends React.Component {
  constructor() {
    super();
    this.state = {
      coders: []
    };
  }

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `http://localhost:3000/api/users/${this.props.user.id}/coders`
      );
      console.log(response)
      let coders = response.data.userRoster[0].Coders;
      if (coders) {
        this.setState({ coders });
        console.log(this.state.coders);
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }
  renderBotton = id => {
    return (
      <button onClick={() => this.props.history.push(`/`)}>
        Add to roster
      </button>
    );
  };
  renderCoders = () => {
    if (this.state.coders.length) {
      return this.state.coders.map(coder => {
        return (
          <div className="coder-card" key={coder.id}>
            <img src={coder.img} alt="profile picture" />
            <h4>{coder.name}</h4>
            <h5>{coder.expertise}</h5>
            {this.renderBotton(coder.id)}
          </div>
        );
      });
    } else {
      return null;
    }
  };
  listCoders = () => {
    const { coders } = this.state;
    return (
      <>
        {!coders.length ? <h3> All coders hired</h3> : null}
        <div>{this.renderCoders()}</div>
      </>
    );
  };

  render() {
    return (
      <div className="teamroster-container">
        <Header />
        <div className="teamroster">
          <h1>TEAM ROSTER</h1>
          <div className="rosterlinks">
            <NavLink className="home" to="/">
              Home
            </NavLink>
            <NavLink className="availablecoders" to="/availablecoders">
              Available Coders
            </NavLink>
            <NavLink className="signout"to="/sign-out">Sign Out</NavLink>
          </div>
        </div>
      <hr></hr>
        <div className="rosterlogo">
          <div className="teamlogo"></div>
          <div className="teamName">
            <p><span>TEAM NAME:</span> {this.props.user.email}</p>
            <p><span>TEAM OWNER:</span> {this.props.user.firstName}</p>
          </div>
          <div>{this.listCoders()}</div>
        </div>
      </div>
    );
  }
}

export default TeamRoster;
