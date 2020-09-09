import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import List from "./components/List";

import "./App.css";

function App() {
  const scraps = ["Rodrigo", "Academia hoje"];

  function handleAddScrap() {}

  return (
    <>
      <Header title="To Do List - ReactJS App" />
      <Container title="Hello world!" />
    </>
  );
}

export default App;
