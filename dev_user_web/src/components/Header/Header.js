import React from "react";
import Navigation from "./components/Navigation";
import MainHeader from "./components/MainHeader";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navigation />
      <MainHeader />
    </header>
  );
};

export default Header;
