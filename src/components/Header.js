import React, { Component } from 'react';
import Form from './Form';
import * as img from "../styles/img";


class Header extends Component {
  render() {
    return (
     
       <header className='uk-grid' data-uk-grid>
        <a className="sign uk-position-top-right" id="signupbtn" href="">Sign Up</a>
        <div className="side uk-width-1-2@m" data-uk-grid>
            <img className="logo" src={img.logo} alt=""/>
            <p>a <span>TEXT</span>  WIKI<span>PEDIA</span></p>
            <h2>KNOWLEDGE AT YOUR FINGERTIPS</h2>

            <a id="more" href="">Find Out More</a>
        </div>
        <div className="uk-width-1-2@m" >
            <div className="form uk-card uk-card-body uk-width-2-3@m uk-overflow-auto uk-align-center">
   				<Form /> 
            </div>
        </div>
    	</header>   
      
    );
  }
}

export default Header;
