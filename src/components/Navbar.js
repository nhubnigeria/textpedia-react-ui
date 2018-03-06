import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (

        <nav className="uk-navbar-container uk-position-bottom-right" data-uk-navbar>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="#">Home</a></li>
                    <li><a href="#">How It Works</a></li>
                </ul>

            </div>
        </nav>
    
    );
  }
}

export default Header;
