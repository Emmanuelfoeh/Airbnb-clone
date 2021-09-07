import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Searchpage from "./Components/SearchPage/Searchpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CssBaseline />

      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <Searchpage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
