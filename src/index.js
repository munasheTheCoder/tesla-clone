import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";


class App  extends Component {

  render(){
  return(
    <>
    
    <Home/>
    </>
    
  )}
  
}

const root = createRoot(document.getElementById('root'))
root.render(<App/>)
