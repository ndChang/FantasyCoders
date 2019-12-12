import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class AvailableCoders extends React.Component {
  constructor() {
    super();
    this.state = {
      coders: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`http://localhost:3000/api/coders`);
      this.setState({ coders: response.data.coders }, () =>
        console.log(this.state.coders)
      );
    } catch (err) {
      console.error(err);
    }
  }
  renderCoders = () => {
    if (this.state.coders.length) {
      return this.state.coders.map(coder => {
          if(coder.userId === null){
            return (
                <div key={coder.id}>
                  <h4>{coder.name}</h4>
                  <h5>{coder.expertise}</h5>
                </div>
              );

              
          }else {
              return null
          }
       
      });
    }else {
        return null
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
      <div className="availablecoders">
        <h1>Available Coders</h1>
        {this.listCoders()}
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}

export default AvailableCoders;
