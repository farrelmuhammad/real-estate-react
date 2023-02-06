import logo from "./logo.svg";
import "./App.css";
import { Route, Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" element={<Home />} />
    </Router>
  );
}

export default App;
