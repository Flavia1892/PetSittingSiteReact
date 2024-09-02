import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import data from "../props/mockDataPrices";

function Navbar() {
  const navigate = useNavigate();
  let id = data.prices[0].id;
  return (
    <>
      <div className="containerNav">
        <div className="rowNav">
          <Link to="homepage" className="colNav">
            Home
          </Link>

          <Link to="ourmission" className="colNav">
            Our Mission
          </Link>

          <Link to="sitters" className="colNav">
            Our sitters
          </Link>

          <Dropdown className="colNav">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Prices
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  navigate(`/pricepage/${id}`);
                }}
              >
                House Sitting
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate(`/pricepage/102`);
                }}
              >
                Pet Boarding
              </Dropdown.Item>
              <Dropdown.Item onClick={() => {
                  navigate(`/pricepage/103`);
                }}>Daily visits</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link to="contact" className="colNav">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
