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
        <button onClick={() => this.props.history.push(`/`)}>Add to roster</button>
    )
  }
  renderCoders = () => {
    if (this.state.coders.length) {
      return this.state.coders.map(coder => {
          if(coder.userId === null){
            return (
                <div className="coder-card" key={coder.id}>
                    <img src={coder.img} alt="profile picture"/>
                  <h4>{coder.name}</h4>
                  <h5>{coder.expertise}</h5>
                  {this.renderBotton(coder.id)}
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
