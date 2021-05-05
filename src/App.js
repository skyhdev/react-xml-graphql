import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/welcome/Welcome';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Main from './components/Main';
import Suppliers from './components/supplier/Suppliers';
import Dashboard from './components/dashboard/Dashboard';
import { useRealmApp, RealmAppProvider } from './components/realm/RealmAppProvider';

const Test = ({ children }) => {
  const app = useRealmApp();
  return children;
}

function App() {
  require('dotenv').config();
  const appId = "application-0-tlzvh";
  return (

    <RealmAppProvider appId={appId}>
      <Test>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} type="login" />
            <Route path="/signup" exact component={Signup} />
            <Route path="/welcome" exact component={Welcome} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/suppliers" exact component={Suppliers} />
          </Switch>
        </BrowserRouter>
      </Test>
    </RealmAppProvider>
  );
}

export default App;
