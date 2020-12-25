import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Matches from "./components/Matches/Matches";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/auth" component={Auth} />
        <Route path="/matches" component={Matches} />
      </BrowserRouter>
    </div>
  );
}

export default App;
