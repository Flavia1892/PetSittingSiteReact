import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  return (
    <>
      <div className="containerNav">
        <div className="rowNav">
          <Link to="homepage" className="colNav">
            Home
          </Link>

          <div className="colNav">Our Mission</div>
          <Link to="sitters" className="colNav">
            Our sitters
          </Link>

          <Dropdown className="colNav">
            
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Prices
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">House Sitting</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Pet Boarding</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Daily visits</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default Navbar;
