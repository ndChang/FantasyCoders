import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './AvailableCoders.css'
import Header from '../shared/Header'
import {updateCoder} from '../../services/coders'


class AvailableCoders extends React.Component {
  constructor() {
    super();
    this.state = {
      coders: [],
      updated:false
    } 
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

  renderButton = id => {
    const {user} = this.props
    if(user){
      return (
        <button onClick={(e) => {
          // console.log("the user id is",user.id)
          // console.log("the coder id is ", id)
          updateCoder(id, user).then(()=> console.log("updated coder"))
          this.props.history.push(`/`)
        }}>Add to roster</button>
    ) 
    }else{
      return null
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.fullname]: event.target.value }

    const editedItem = Object.assign(this.state.item, updatedField)

    this.setState({ item: editedItem })
  }

  handleSubmit = event => {
    // event.preventDefault()

    updateCoder(this.props.params.id)
      .then(() => this.setStatus({ updated: true }))
      .catch(console.error)
  }

  renderCoders = () => {
    if (this.state.coders.length) {
      return this.state.coders.map(coder => {
          if(coder.userId === null || coder.userId === 0){
            return (
                <div className="coder-card" key={coder.id}>
                    <img src={coder.img} alt="profile picture"/>
                  <h4>{coder.name}</h4>
                  <h5>{coder.expertise}</h5>
                  {this.renderButton(coder.id)}
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
