import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import Header from "./components/Header";


class App  extends Component {

  render(){
  return(
    <>
    <Header/>
    <Home/>
    </>
    
  )}
  
}

const root = createRoot(document.getElementById('root'))
root.render(<App/>)
