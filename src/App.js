import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Registration from "./components/Auth/Registration/Registration";
import Login from "./components/Auth/Login/Login";
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
