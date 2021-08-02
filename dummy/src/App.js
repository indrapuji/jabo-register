import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Chosee = React.lazy(() => import("./views/pages/ChoosePasien"));
const Login = React.lazy(() => import("./views/pages/Login"));
const Register = React.lazy(() => import("./views/pages/RegisterPatient"));
const OldRegister = React.lazy(() => import("./views/pages/RegisterOldPatient"));
const AddAdmin = React.lazy(() => import("./views/pages/AddAdmin"));
const Validate = React.lazy(() => import("./views/pages/ValidatePatient"));
const ScanValidate = React.lazy(() => import("./views/pages/ScanValidate"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const Success = React.lazy(() => import("./views/pages/Success"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route exact path="/admin-register" name="Login Page" render={(props) => <AddAdmin {...props} />} />
            <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
            <Route exact path="/choose" name="Chosee Page" render={(props) => <Chosee {...props} />} />
            <Route exact path="/choose/:nik" name="Register Page" render={(props) => <OldRegister {...props} />} />
            <Route exact path="/validate/:dataId" name="Validasi" render={(props) => <Validate {...props} />} />
            <Route exact path="/scan/:dataId" name="Scan" render={(props) => <ScanValidate {...props} />} />
            <Route exact path="/success" name="Success" render={(props) => <Success {...props} />} />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home" render={(props) => <TheLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
