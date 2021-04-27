import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import netlifyIdentity from 'netlify-identity-widget';

function App() {
  window.netlifyIdentity = netlifyIdentity;
  // You must run this once before trying to interact with the widget
  netlifyIdentity.init();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} type="login" />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
