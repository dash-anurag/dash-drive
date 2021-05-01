import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import { Container } from "react-bootstrap";

import Dashboard from "./components/Dashboard";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import ForgotPassword from "./components/authentication/ForgotPassword";
import UpdateProfile from "./components/authentication/UpdateProfile";

import PrivateRoute from "./utils/PrivateRoute";
const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
