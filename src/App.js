
import './App.css';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import RootLayout from "./components/rootLayout";
import ForgetPassword from "./pages/ForgetPassword";

    //
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Login />} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/recoverpassword' element={<ForgetPassword/>} />
            <Route path='/home' element={<Home/>} />
        </Route>
    )
);

function App() {
  return (
      <>
          <RouterProvider router={router}/>
      </>
  );

}

export default App;
