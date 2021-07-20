import ReactDOM from 'react-dom';
// import Pet from "./pet";
import SearchParams from './SearchParams';


const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
      {/* <Pet name="Birch" animal="Cat" breed="Orange and while stripes"></Pet>
      <Pet name="Koda" animal="Dog" breed="American Eskimo"></Pet>
      <Pet name="Phish" animal="Bunny" breed="cow like"></Pet> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
