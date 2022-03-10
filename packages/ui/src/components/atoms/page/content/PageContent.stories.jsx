import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import PageContent from './PageContent';
import { Tabs, PageHeader, FooterTooltip } from '../../../atoms';

export default {
  title: 'ui/page/content/PageContent',
  component: PageContent,
};

const Template = (args) => {
  return (
    <Router>
      <PageContent {...args}>
      <PageHeader 
           breadcrumbs={[
            'Example Default Page',
           ]}
        />
      <div>
            <p>Example</p>
      </div>
      </PageContent>
    </Router>
  )
};

export const Default = Template.bind({});
Default.args = {
  name: 'DefaultContent',
  form: false,
  container: false,
  overlay: false,
};


const FormTemplate = (args) => {
  return (
    <Router>
      <PageContent {...args}>
      <PageHeader 
           breadcrumbs={[
            'Example Form Page',
           ]}
        />
      <div>
            <p>Example</p>
      </div>
      </PageContent>
    </Router>
  )
};

export const Form = FormTemplate.bind({});
Form.args = {
  name: 'DefaultContent',
  form: true,
  container: false,
  overlay: false,
};

const OverlayTemplate = (args) => {
  return (
    <Router>
      <PageContent {...args}>
      <PageHeader 
           breadcrumbs={[
            'Example Overlay Page',
           ]}
        />
      <div>
            <p>Example</p>
      </div>
      </PageContent>
    </Router>
  )
};


export const Overlay = OverlayTemplate.bind({});
Overlay.args = {
  name: 'DefaultContent',
  form: false,
  container: false,
  overlay: true,
};
