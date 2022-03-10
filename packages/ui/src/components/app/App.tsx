import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Accounts, Integrations, Service, Settings } from '.';
import { Menu, Header } from './layout';
import { AccountEdit } from './accounts'
import { Container, PageContainer, Content, MenuContainer} from './App.styled';

export default function App(settings:any) {
  return (
    <Container>
      <Router>
        <Header />
        <PageContainer>
          <MenuContainer>
            <Menu />
          </MenuContainer>
          <Content>
            <Switch>
              <Route exact path="/" render={() => <Home {...settings} />} />
              <Route path="/settings"  render={() => <Settings {...settings} />} />
              <Route path="/service"  render={() => <Service {...settings} />} />
              <Route path="/integrations"  render={() => <Integrations {...settings} />} />
              <Route exact path="/accounts" render={() => <Accounts {...settings} />} />
              <Route path="/accounts/:accountId/edit"  render={(params) => <AccountEdit {...settings} {...params} />} />
            </Switch>
          </Content>
        </PageContainer>
      </Router>
    </Container>
  );
}
