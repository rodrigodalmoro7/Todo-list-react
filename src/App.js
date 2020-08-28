import React from "react";   
import Header from "./components/Header";
import Body from "./components/Body";

import "./App.css";
import { useState } from "react";

function App(){
    return(
        <>
            <Header title="To Do List - ReactJS App" />
            <Body />
        </>
    )
}

export default App;