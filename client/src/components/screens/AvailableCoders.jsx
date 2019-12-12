import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './AvailableCoders.css'


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

  renderBotton = id => {
    return (
      <button onClick={() => this.props.history.push(`teamroster/`)}>Add to roster</button>
    )
  }
  renderCoders = () => {
    if (this.state.coders.length) {
      return this.state.coders.map(coder => {
        if (coder.userId === null) {
          return (
            <div className="coder-container">
              <div className="coder-card" key={coder.id}>
                <img src={coder.img} alt="profile picture" />
                <p>{coder.name}</p>
                <p>{coder.expertise}</p>
                {this.renderBotton(coder.id)}
              </div>
            </div>
          );


        } else {
          return null
        }

      });
    } else {
      return null
    }
  };

  listCoders = () => {
    const { coders } = this.state;
    return (
      <>
        {!coders.length ? <h3> All coders hired</h3> : null}
        <div className="rendercode">{this.renderCoders()}</div>
      </>
    );
  };


  render() {
    return (
      <div className="availablecoders">
        <h1>Available Coders</h1>
        <hr></hr>
       {this.listCoders()}
    
      </div>
    );
  }
}

export default AvailableCoders;
