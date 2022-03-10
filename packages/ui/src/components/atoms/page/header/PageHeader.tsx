
import { mdiChevronRight } from '@mdi/js';
import { Link } from 'react-router-dom';

import {
    HeaderItem, BreadCrumb, HeaderIcon
} from './PageHeader.d';

import { 
    Container,
    Header,
    IconContainer,
    SingleItem,
    NestedItem,
    BreadcrumbLabel,
    BreadcrumbContainer,
    ChevronContainer,
    HeaderActionIcon,
    ChevronIcon,
    ChildComponentContainer,
    MainIcon,
} from './PageHeader.styled';


const Chevron = ({ index }:any) => {
    if(index === 0) return null;
    return (
        <ChevronContainer>
            <ChevronIcon className="chevIcon" path={mdiChevronRight}  size={1} />
        </ChevronContainer>
    )
}

const ChevronBreadcrumbItem = ({ item, index = 0 }:HeaderItem) => (
    <NestedItem key={`nestedHeader${index}`}>
        <Chevron index={index} />
        <BreadcrumbLabel>{item}</BreadcrumbLabel>
    </NestedItem>
)

const SingleBreadcrumb = (breadcrumbs:BreadCrumb[]) => (
    <SingleItem>
        <BreadcrumbLabel>{breadcrumbs[0]}</BreadcrumbLabel>
    </SingleItem>
)

const MultiBreadcrumb = (breadcrumbs:BreadCrumb[]) => 
    breadcrumbs.map(
        (item:BreadCrumb, index:number) => ChevronBreadcrumbItem({ item, index })
);
                
const BreadCrumbs = (breadcrumbs:BreadCrumb[]) => (
    <BreadcrumbContainer>
        { breadcrumbs.length > 1 
                ? MultiBreadcrumb(breadcrumbs)
                : SingleBreadcrumb(breadcrumbs) }
    </BreadcrumbContainer>
)

const PageIcon = ({ icon, index, title, onClick }:HeaderIcon) => (
    <Link key={index} to="#" onClick={onClick}>
        <HeaderActionIcon 
            path={icon} title={title} size={1} />
    </Link>
)

const ActionIcons = (icons:HeaderIcon[]) => (
    <IconContainer>
        { icons.map(
            (icon:HeaderIcon, index:number) => 
                PageIcon({ ...icon, index })) }
    </IconContainer>
)

export default ({ icon = null, iconComponent = null, breadcrumbs = [], icons = [], children = [] }) => (
    <Container>
        <Header>
            { iconComponent ? iconComponent : null}
            { icon ? <MainIcon path={icon} /> : null}
            { BreadCrumbs(breadcrumbs) }
            { ActionIcons(icons) }
            <ChildComponentContainer>{ children }</ChildComponentContainer>
        </Header>
    </Container>
);
