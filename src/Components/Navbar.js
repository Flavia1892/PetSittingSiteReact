import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import data from "../props/mockDataPrices";
import people from "../props/SittersData";
import { useState } from "react";
import { useRef } from "react";

function Navbar() {
  const navigate = useNavigate();
  const inputText = useRef(null);

  let id = data.prices[0].id;

  let sittersList = people.persons;

  let [filteredSitters, setPetSitters] = useState(sittersList);
  let [searchVal, setSearchVal] = useState(" ");

  function handleSearchClick() {
    if (searchVal === " ") {
      setPetSitters(sittersList);
    } else {
      let filterBySearch = sittersList.filter((item) => {
        if (
          item.name.first
            .toLocaleLowerCase()
            .includes(searchVal.toLocaleLowerCase()) ||
          item.name.last
            .toLocaleLowerCase()
            .includes(searchVal.toLocaleLowerCase()) ||
          item.preference
            .toLocaleLowerCase()
            .includes(searchVal.toLocaleLowerCase())
        ) {
          return item;
        }
      });
      setPetSitters(filterBySearch);
    }
  }

  function handleReset() {
    if (inputText.current) {
      inputText.current.value = "";
      inputText.current.type = "text";
    }
  }

  function doSearch() {
    navigate("/searchsittersvalue", { state: filteredSitters });
    localStorage.setItem("searchedWords", JSON.stringify(searchVal));
    handleReset();
  }

  return (
    <>
      <div className="containerNav">
        <div className="rowNav">
          <Link to="homepage" className="colNav">
            Home
          </Link>

          <Dropdown className="colNav">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              About Us
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  navigate(`ourmission`);
                }}
              >
                Our Mission
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate(`aboutus`);
                }}
              >
                About Us
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
              <Dropdown.Item
                onClick={() => {
                  navigate(`/pricepage/103`);
                }}
              >
                Daily visits
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link to="contact" className="colNav">
            Contact
          </Link>
        </div>
      </div>
      <div class="searchNav">
      
        <input
          enterkeyhint="done"
          ref={inputText}
          onChange={(e) => {
            setSearchVal(e.target.value);
            handleSearchClick();
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              doSearch();
            }
          }}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search sitter here"
          aria-label="Search"
        ></input>
        <div>
          <button onClick={doSearch} type="submit" class=" border-1 border-black pt-1 pb-1 pl-1 pr-1 rounded-xl">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
