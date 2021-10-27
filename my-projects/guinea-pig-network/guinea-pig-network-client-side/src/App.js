import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Home from "./components/shared/Home/Home";
import Footer from "./components/shared/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="*" exact>
            {/* <Home></Home> */}
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
