import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./reduxStore";

// Components
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
    <Provider store={store}>
      <div className="App">
        <Header title={title} tempArr={tempArr} />
      </div>
    </Provider>
  );
}

export default App;
