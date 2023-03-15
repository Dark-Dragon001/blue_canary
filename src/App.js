
import './App.css';
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router";

function App() {
  return (
      <>
          <Login />
      </>



  );
}

export default App;
