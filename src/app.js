const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1", {id: "my-brand"}, "Adopt Me!!"),
        React.createElement(Pet, {name: "Birch", animal: "Cat", breed: "Orange and white Stripes"}),
        React.createElement(Pet, {name: "koda", anmial: "Dog", breed: "american eskimo"}),
        React.createElement(Pet, {name: "Phish", animal: "Bunny", breed: "white rabbit"}),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));