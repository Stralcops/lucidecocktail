import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";
import "./index.css";
import "./App.css";
import { MainTitle } from "./components/MainTitle/MainTitle";
import AnimatedTitle from "./components/AnimatedTitle/AnimatedTitle";
const App = () => (
  <div>
    <Logo />
    {/* <MainTitle/> */}
    <AnimatedTitle text="LucideCocktail" id="main-center-title"/>

  
  </div>
);

export default App;
