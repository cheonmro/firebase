import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage/LandingPage";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import "./App.css";
// import SignInPage from "./components/Auth/SignIn";
import SignInPage from "components/Auth/SignIn";
import SignUpPage from "components/Auth/SignUp";
// import PasswordUpdate from "./components/Auth/PasswordUpdate";
import PasswordReset from "./components/Auth/PasswordReset";
import SignInGoogle from "./components/Auth/SignInGoogle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signingoogle" component={SignInGoogle} />
        <Route path="/passwordreset" component={PasswordReset} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
