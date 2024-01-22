import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      breed: "Yorkie",
      name: "Oliver",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      breed: "Yorkie",
      name: "Hayley",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      breed: "Yorkie",
      name: "Willow",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
