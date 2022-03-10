import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import PageHeader from './PageHeader';
import { mdiArrowRight, mdiArrowLeft } from '@mdi/js';

export default {
  title: 'ui/page/header/PageHeader',
  component: PageHeader,
};

const Template = (args) => {
  return (
    <Router>
      <div>
      <PageHeader {...args} />
      </div>
    </Router>
  )
};

export const Default = Template.bind({});
Default.args = {
  breadcrumbs: ['Settings']
};

export const SingleBreadcrumb = Template.bind({});
SingleBreadcrumb.args = {
  breadcrumbs: ['Single']
};

export const MultipleBreadcrumbs = Template.bind({});
MultipleBreadcrumbs.args = {
  breadcrumbs: ['Settings','Server']
};


export const SingleWithIcon = Template.bind({});
SingleWithIcon.args = {
  name: 'Single With Icons',
  breadcrumbs: ['Settings'],
  icons: [
    { icon: mdiArrowRight, title: 'test' },
  ]
};

export const SingleBreadcrumbWithMultipleIcon = Template.bind({});
SingleBreadcrumbWithMultipleIcon.args = {
  name: 'Single With Icons',
  breadcrumbs: ['Settings'],
  icons: [
    { icon: mdiArrowLeft, title: 'test' },
    { icon: mdiArrowRight, title: 'test' },
  ]
};


export const MultiBreadcrumbsWithMultipleIcons = Template.bind({});
MultiBreadcrumbsWithMultipleIcons.args = {
  name: 'Single With Icons',
  breadcrumbs: ['Settings', 'Server'],
  icons: [
    { icon: mdiArrowLeft, title: 'test' },
    { icon: mdiArrowRight, title: 'test' },
  ]
};
