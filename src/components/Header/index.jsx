import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div>
          <Link to="/user">User</Link>
        </div>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
        <div>
          <Link to="/settings">Settings</Link>
        </div>
      </header>
    );
  }
}

export default Header;
