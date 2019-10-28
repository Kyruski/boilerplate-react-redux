import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Hello!</h1>
      <Counter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
