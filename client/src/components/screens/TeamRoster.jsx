import React from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

class TeamRoster extends React.Component {
  constructor() {
    super();
    this.state = {
      coders: []
    };
  }

  async componentDidMount() {
    console.log(this.props.history.location.pathname);
    // /users/5/coders
    try {
      const response = await Axios.get(
        `http://localhost:3000/api${this.props.history.location.pathname}`
      );
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
        <div className="teamroster">
          <h1>TEAM ROSTER</h1>
          {this.listCoders()}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/availablecoders">Available Coders</NavLink>
        </div>
        <div className="team-logo">
          <img src="https://cms-assets.tutsplus.com/uploads/users/151/posts/32220/image/FB10.jpg" />
        </div>
      </div>
    );
  }
}

export default TeamRoster;
