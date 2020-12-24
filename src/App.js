import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Registration from "./components/Auth/Registration/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/auth/regist" component={Registration} />
      </BrowserRouter>

      <footer></footer>
    </div>
  );
}

export default App;
