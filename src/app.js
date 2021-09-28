import { StrictMode, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from "@apollo/client";

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './details';
import ThemeContext from './ThemeContext';
import Beer from './Beer';
import LendData from './Lend/Lend';

const client = new ApolloClient({
  uri: 'https://api.kivaws.org/graphql',
  cache: new InMemoryCache()
});


const App = () => {

  const theme = useState("purple");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
        <header>
        <Link to="/">
        <h1>Adopt me!</h1>
        </Link>
        </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path ="/beer">
             <Beer/>
            </Route>
            <Route path ="/lend">
              <LendData />
            </Route>
            <Route path ="/">
              <SearchParams />
            </Route>
           
            
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>, 
document.getElementById("root"));
