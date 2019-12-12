import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './AvailableCoders.css'
import Header from '../shared/Header'


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
        <button onClick={() => this.props.history.push(`/`)}>ADD TO ROSTER</button>
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
                <p>Name: {coder.name}</p>
                <p>Expertise: {coder.expertise}</p>
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
        <Header />
         <NavLink to="/">Home</NavLink>
        <h1>Available Coders</h1>
        <hr></hr>
       {this.listCoders()}
    
      </div>
    );
  }
}

export default AvailableCoders;
