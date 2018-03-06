import React, { Component } from 'react';
import * as img from "../styles/img";


class Form extends Component {
  render() {
    return (
      
        <form className="uk-form-stacked">
            <img className="logo" src={img.logo2} alt=""/>
            <h1>Sign Up</h1>
            
            <div className="uk-margin">
                <label className="uk-form-label">Phone Number</label>
                <div className="uk-form-controls">
                    <input className="uk-input" type="number" placeholder="Phone Number"/>
                </div>
            </div>

            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="email">Email</label>
                <div className="uk-form-controls">
                    <input className="uk-input" id="email" type="email" placeholder="Email"/>
                </div>
            </div>
            <div className="uk-margin">
                <input className="uk-button uk-text-capitalize button uk-button-secondary" value="Sign Up" type="submit"/>
            </div>
        </form> 
      
    );
  }
}

export default Form;
