// import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
// import Home from 'components/home/Home';
// import Menu from 'components/ui/menu/Menu';
// import Header from 'components/ui/header/Header';
// import Accounts from 'components/accounts/Accounts';
// import Settings from 'components/settings/Settings';
// import Service from 'components/service/Service';
// import AccountEdit from 'components/accounts/edit/AccountEdit';
// import AccountCreate from 'components/accounts/create/AccountCreate';
// import Integrations from 'components/integrations/Integrations';

export default function App() {
  return (
    <div>
    {/* <Router>
      <Header />
        <Menu />
        <Switch>
          <Route exact path="/" render={() => <Home {...settings} />} />
          <Route path="/settings"  render={() => <Settings {...settings} />} />
          <Route path="/service"  render={() => <Service {...settings} />} />
          <Route path="/integrations"  render={() => <Integrations {...settings} />} />
          <Route exact path="/accounts" render={() => <Accounts {...settings} />} />
          <Route path="/accounts/create"  render={() => <AccountCreate {...settings} />} />
          <Route path="/accounts/:accountId/edit"  render={(params) => <AccountEdit {...settings} {...params} />} />
        </Switch>
      </Router> */}
    </div>
  );
}
