import React from "react";
import "./App.scss";

import Header from "./components/header/Header";

function App() {
  const title = "Title";
  const tempArr = [
    {
      firstName: "Joe",
      lastName: "Doe",
      age: 32,
      isOnline: true
    }
  ];

  return (
    <div className="App">
      <Header title={title} tempArr={tempArr} />
    </div>
  );
}

export default App;
