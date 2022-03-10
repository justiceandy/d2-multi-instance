import React from 'react';
import SortableGrid from './SortableGrid';

export default {
  title: 'ui/grid/sortable',
  component: SortableGrid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
      <SortableGrid {...args} />
  )
};

export const General = Template.bind({});
General.args = {
    list: [
        {
          id: "0",
          order: 0
        },
        {
          id: "1",
          order: 1
        },
        {
          id: "2",
          order: 2
        },
        {
          id: "3",
          order: 3
        },
        {
          id: "4",
          order: 4
        }
      ]
  
};

