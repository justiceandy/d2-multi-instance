import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'
import FooterTooltip from './FooterTooltip';

export default {
  title: 'ui/page/footer/FooterToolTip',
  component: FooterTooltip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router>
      <FooterTooltip {...args} />
    </Router>
  )
};

const General = Template.bind({});
      General.args = {
        text: 'General Notification',
      };


const IconNav = Template.bind({});
      IconNav.args = {
        text: 'Tooltip Footer with icons',
        icons: [
          { icon: mdiArrowLeft, title: 'Back to Accounts'  },
          { icon: mdiArrowRight, title: 'Next Account' },
        ]
      };


  export { General, IconNav }
