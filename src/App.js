import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/auth" component={Auth} />
      </BrowserRouter>
    </div>
  );
}

export default App;
