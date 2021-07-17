import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!!"),
    React.createElement(Pet, {
      name: "Birchy",
      animal: "Cat",
      breed: "Orange and white Stripes",
    }),
    React.createElement(Pet, {
      name: "Koda",
      anmial: "Dog",
      breed: "american eskimo",
    }),
    React.createElement(Pet, {
      name: "Phish",
      animal: "Bunny",
      breed: "white rabbit",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
