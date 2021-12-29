import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

//router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
