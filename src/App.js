import React from "react";   
import Header from "./components/Header";
import Container from "./components/Container";
import List from "./components/List";

import "./App.css";

function App(){
    return(
        <>
            <Header title="To Do List - ReactJS App" />
            <Container title="Inicia o body"/>     
        </>
    )
}

export default App;