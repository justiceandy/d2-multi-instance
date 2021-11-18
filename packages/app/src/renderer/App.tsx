import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/home/Home';
import Menu from '../components/menu/Menu';
import Accounts from '../components/accounts/Accounts';
import Header from '../components/header/Header';
import Settings from '../components/settings/Settings';
import Service from '../components/service/Service';
import AccountEdit from 'components/accounts/edit/AccountEdit';
import AccountCreate from 'components/accounts/create/AccountCreate';
import Processes from 'components/processes/Processes';

export default function App() {
  return (
    <div>
    <Header />
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/accounts" component={Accounts} />
        <Route path="/accounts/edit" component={AccountEdit} />
        <Route path="/accounts/create" component={AccountCreate} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/processes" component={Processes} />
      </Switch>
    </Router>
    </div>
  );
}
