
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Routes} from "react-router";
import Sign_Up from "./pages/Sign_Up";
import Login from "./pages/Login";

function App() {
  return (
      <div>
          <Login />
      </div>

  );
}

export default App;
