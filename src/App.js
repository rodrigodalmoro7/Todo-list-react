import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import List from "./components/List";

import "./App.css";

function App() {
  const scraps = ["Rodrigo", "Academia hoje"];

  return (
    <>
      <Header title="To Do List - ReactJS App" />
      <Container />
      <List />
    </>
  );
}

export default App;
