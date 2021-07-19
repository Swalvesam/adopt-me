import ReactDOM from 'react-dom';
import Pet from "./pet";


const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Birch" animal="Cat" breed="Orange and while stripes"></Pet>
      <Pet name="Koda" animal="Dog" breed="American Eskimo"></Pet>
      <Pet name="Phish" animal="Bunny" breed="cow like"></Pet>
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
