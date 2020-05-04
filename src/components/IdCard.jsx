import React, { Component } from "react";
import "./../IdCard.css";

class IdCard extends Component {
  render() {
    console.log(this);
    return (
      <div className="id-card">
        <img src={this.props.picture} alt="" />
        <div className="text">
          <p>
            <strong>Last Name: </strong>
            {this.props.lastName}
          </p>
          <p>
            <strong>First Name: </strong>
            {this.props.firstName}
          </p>
          <p>
            <strong>Gender: </strong>
            {this.props.gender}
          </p>
          <p>
            <strong>Height: </strong>
            {this.props.height}
          </p>
          <p>
            <strong>Birth Date: </strong>
            {this.props.birth}
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
