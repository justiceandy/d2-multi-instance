import { NavLink, Link } from 'react-router-dom';
import { Container, Tab, TabList } from './Tabs.styled';

import {
    UrlTab,
    StateTab,
    TabProps,
} from './Tabs.d'

const UrlTabs = ({ tabs }:any) => {
    return tabs.map(({ url = '', label, exact = false }:UrlTab) => (
        <NavLink 
            to={url}
            exact={exact}
            key={`tab-${label}`}
            className={isActive => isActive ? 'active' : 'inactive'}
            children={
                <Tab>{label}</Tab>
            } />
    ));
}

const StateTabs = ({ tabs = [], active }:any) => {
    const defaultNotify = ({ }) => true;
    return tabs.map(({ label, notify = defaultNotify, route = '' }:StateTab) => (
        <Link 
            to="#" 
            key={`tab-${label}`}
            className={active === route ? 'active' : 'inactive' }
            onClick={(e:any) => notify({ event: e, route })}
            children={
                <Tab>{label}</Tab>
            } />
    ));
}
export default function Tabs ({ tabs, type = 'url', active = '' }:TabProps) {
    const stateTab = type === 'state';
    const tabProps = { tabs, active };
    return (
        <Container>
            <TabList>
                { stateTab ? StateTabs(tabProps) : UrlTabs(tabProps) }
             </TabList>
        </Container>
    )
};
