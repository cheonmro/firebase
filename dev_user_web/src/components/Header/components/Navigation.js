import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navi">
      <nav>
        <ul className="nav-items">
          <li>
            <Link to="/signingoogle" className="text-link">
              <span>프로필</span>
            </Link>
          </li>
          <li>
            <Link to="/passwordreset" className="text-link">
              <span>장바구니</span>
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-link">
              <span>내예약</span>
            </Link>
          </li>
          <li>
            <Link to="/signin" className="text-link">
              <span>내일정</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
