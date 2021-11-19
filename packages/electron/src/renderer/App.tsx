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

export default function App({ settings }:any) {
  return (
    <div>
      <Header />
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" render={() => <Home {...settings} />} />
          <Route exact path="/accounts" render={() => <Accounts {...settings} />} />
          <Route path="/accounts/create"  render={() => <AccountCreate {...settings} />} />
          <Route path="/settings"  render={() => <Settings {...settings} />} />
          <Route path="/service"  render={() => <Service {...settings} />} />
          <Route path="/processes"  render={() => <Processes {...settings} />} />
          <Route path="/accounts/:accountId/edit"  render={(params) => <AccountEdit {...settings} {...params} />} />
        </Switch>
      </Router>
    </div>
  );
}
