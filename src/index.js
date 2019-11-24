import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";
import { createStore } from "redux";
import todoApp from "./reducers";

//check the logs to see kung anong nangyayari sa state
const store = createStore(todoApp);
// Log the initial state
console.log("state initial:");
console.log(store.getState());
console.log("state initial:");

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <h2>See the (console)logs para makita kung anong nangyayari sa state!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
