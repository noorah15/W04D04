import React, { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

function Nav() {
  const history = useHistory();

  const viewCardPage = () => {
    history.goBack();
  };
  const viewSearchPage = (e) => {
    if (e.key === "Enter") {
      history.push(`/search/${e.target.value}`);
    }
  };

  return (
    <div className="nav">
      <ul>
        <li className="icon">
          {" "}
          <Link
            onClick={() => {
              viewCardPage();
            }}
          >
            {" "}
            <IoArrowBackCircleSharp />{" "}
          </Link>{" "}
        </li>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/cards"> Cards </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
        <li>
          <input
            type="text"
            name="searchText"
            onKeyPress={(e) => {
              viewSearchPage(e);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
