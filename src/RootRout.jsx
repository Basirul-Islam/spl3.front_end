import React from "react";
import InputPage from "./Input";
import DefaultRout from "./DefaultRout";
import { Routes , Route } from "react-router-dom";
import OutputPage from "./Output";

export default function RootRoute() {
  return (
      <Routes >
        <Route exact path="/" element = {<InputPage />} />
        <Route exact path="/Output" element = {<OutputPage />} />  
        {/* default */}
        {/* <DefaultRout /> */}
      </Routes >    
  );
}
